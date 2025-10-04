import React from 'react';
import MealPlanSection1 from '../../component/mealPlan/MealPlanSection1';
import MealPlanSection2 from '../../component/mealPlan/MealPlanSection2';
import MealPlanSection3 from '../../component/mealPlan/MealPlanSection3';

const MealPlan = () => {
    return (
        <div>
            <MealPlanSection1></MealPlanSection1>
            <MealPlanSection2></MealPlanSection2>
            <MealPlanSection3></MealPlanSection3>
        </div>
    );
};

export default MealPlan;