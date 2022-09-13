import React, {useEffect, useMemo, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import AsyncSelect from 'react-select/async';
import AuthSuccessLayout from "@/Layouts/AuthSuccessLayout";
import Sidebar from "@/Components/Sidebar";
import {Box, Drawer, DrawerContent, useDisclosure} from "@chakra-ui/react";
import ItemsList from "@/Components/ItemsList";


export default function TasksList(props) {
    const [selectedToys, setSelectedToys] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState(null);
    const [tasks, setTasks] = useState([]);
    const {isOpen, onClose} = useDisclosure();

    const query = useMemo(() => {
        const selectedToysIds = selectedToys?.map(selectedToy => selectedToy.id);
        const selectedCategoriesIds = selectedCategories?.map(selectedCategory => selectedCategory.id);
        let toReturn = "";
        if (selectedToysIds?.length) {
            toReturn += `selectedToys[]=${selectedToysIds?.join(',') || ""}`;
        }
        if (selectedCategoriesIds?.length) {
            toReturn = (toReturn.length ? "&" : "") + `selectedCategories[]=${selectedCategoriesIds?.join(',') || ""}`;
        }
        return toReturn;
    }, [selectedToys, selectedCategories]);

    useEffect(() => {
        fetch(`/api/tasks?${query}`)
            .then(res => res.json().then(res => res.data))
            .then(loadedTasks => setTasks(loadedTasks));

    }, [query]);

    // handle selection
    const handleToysChange = value => {
        setSelectedToys(value);
    }
    const handleCategoriesChange = value => {
        setSelectedCategories(value);
    }

    // load options using API call
    const loadToys = (inputValue) => {
        return fetch(`/api/toys`).then(res => res.json().then(res => res.data));
    };

    // load options using API call
    const loadCategories = (inputValue) => {
        return fetch(`/api/categories`).then(res => res.json().then(res => res.data));
    };

    return (
        <AuthSuccessLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks List</h2>}
        >
            <div className="py-12">
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    isMulti
                    value={selectedToys}
                    getOptionLabel={e => e.title}
                    getOptionValue={e => e.id}
                    loadOptions={loadToys}
                    onChange={handleToysChange}
                />
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    isMulti
                    value={selectedCategories}
                    getOptionLabel={e => e.title}
                    getOptionValue={e => e.id}
                    loadOptions={loadCategories}
                    onChange={handleCategoriesChange}
                />
            </div>
            <div className="py-12">
                <ItemsList items={tasks}></ItemsList>
                {/*{tasks.map(task => <div key={task.id}>{task.title}</div>)}*/}
            </div>
        </AuthSuccessLayout>
    );
}
