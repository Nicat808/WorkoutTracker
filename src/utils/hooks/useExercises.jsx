import { exerciseList } from "../../data/exerciseList";
import { useState, useEffect, useCallback } from "react";

const useExercises = () => {
  const [filters, setFilters] = useState({
    nameQuery: "",
    mechanic: "All",
    force: "All",
  });

  const [filteredExercises, setFilteredExercises] = useState(exerciseList);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    const { nameQuery, mechanic, force } = filters;

    const filtered = exerciseList.filter((exercise) => {
      const matchesName = exercise.name
        .toLowerCase()
        .includes(nameQuery.toLowerCase());
      const matchesMechanic =
        mechanic === "All" || exercise.mechanic === mechanic;
      const matchesForce = force === "All" || exercise.force === force;
      return matchesName && matchesMechanic && matchesForce;
    });

    setFilteredExercises(filtered);
  };

  const setSearchQuery = useCallback((query) => {
    setFilters((prev) => ({ ...prev, nameQuery: query }));
  }, []);

  const setMechanicFilter = useCallback((mechanic) => {
    setFilters((prev) => ({ ...prev, mechanic }));
  }, []);

  const setForceFilter = useCallback((force) => {
    setFilters((prev) => ({ ...prev, force }));
  }, []);
  return {
    exercises: filteredExercises,
    setSearchQuery,
    setMechanicFilter,
    setForceFilter,
    filters,
  };
};

export default useExercises;
