function Budgeting(props){

    return(
        <center>
            <h1>Budgeting:</h1>
            <h2>What is a budget?</h2>

            Budgeting is allowing or providing a certain amount of money in a budget. This allows you to better manage your finances and achieve your financial goals. When it comes to budgeting you need to have a clear idea of what all your expenses are.
            <div/>

            <h2>Expenses:</h2>

            There are two main types of expenses, fixed and flexible expenses. Fixed expenses are expenses that stay the same from month to month, such as rent payments. These are the expenses that are consistent from to month. The other type is flexible expenses, which are expenses that change from month to month, such as how much you spend on utilities. Here is a list of examples for both expenses:

            <h2>Fixed Expenses:</h2>

            - Rent/Mortgage (mostly fixed)
            <div/>
            - Childcare
            <div/>
            - Debt Payments
            <div/>
            o Student loans
            <div/>
            o Credit cards
            <div/>
            o Personal loans
            <div/>
            - Insurance
            <div/>
            - Tuition
            <div/>
            - Home internet/TV
            <div/>

            <h2>Flexible Expenses:</h2>
            - Food/Groceries
            <div/>
            - Entertainment
            <div/>
            o Movies
            <div/>
            o Eating Out
            <div/>
            o Vacations
            <div/>
            o Sports Events
            <div/>
            - Medical
            <div/>
            - Utilities
            <div/>
            o Water
            <div/>
            o Gas
            <div/>
            o Electric
            <div/>
            - Personal care
            <div/>
            - Gifts
            <div/>
            - Child Costs
            <div/>
            - Home Improvement/Maintenance
            <div/>
            - Pet Care
            <div/>
            Every month you combine both types of expenses so that you are left with your total expenses for the month. This makes it easier to keep track of how much the expenses are from month to month.
            
            
            <h2>Income:</h2>
            To pay off your monthly expenses, you will need to know your total monthly income to better manage your expenses. Your total monthly income is the total amount of income you receive each month before taxes, this can include any type of income you receive from various sources like your job, investments, gifts, etc. Your disposable income is the income you have after taxes, this is the amount of money you must pay your expenses.
            
            
            <h2>Needs and Wants:</h2>


            Another way to categorize your expenses is through your needs vs. wants. This is a list of your expenses categorized by what you really need to spend on vs. what you want to spend on. Needs can include:
            <div/>
            - Rent/Mortgages
            <div/>
            - Food and groceries
            <div/>
            - Utilities (electricity, water, and gas)
            <div/>
            - Health insurance and medical expenses
            <div/>
            - Basic clothing
            <div/>
            - Transportation
            <div/>
            - Education and Tuition fees
            <div/>
            - Childcare expenses (if applicable)
            <div/>
            - Personal Hygiene products
            <div/>
            - Basic home supplies
            <div/>
            <h3>And your wants can include:</h3>

            - Eating out at restaurants
            <div/>
            - Traveling and vacations
            <div/>
            - Designer clothing and accessories
            <div/>
            - High-end gadgets and electronics
            <div/>
            - Gym memberships and fitness classes
            <div/>
            - Entertainment expenses
            <div/>
            - Expensive hobbies
            <div/>
            - Home decorations and luxury items
            <div/>
            - High-end vehicles or luxury car payments
            <div/>
            - Premium streaming services and subscriptions
            <div/>
            <p>Your wants and needs can differ from this list as nobody will have the same wants and needs as you, to better visualize your wants and needs we encourage you to make a list of your wants and needs.</p>


            <button onClick={props.onClose}>Close</button>
        </center>
    )


}

export default Budgeting