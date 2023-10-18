function Credit(props){

    return(
        <center>
            <h1>Credit:</h1>

            <h2>What is a Credit Score?</h2>
            A credit score is a three-digit number that lenders use to assess your creditworthiness based on information in your credit report. Higher scores are more likely to qualify for loans and credit cards with good terms.
            <div/>
            <h3>Credit score range:</h3>
            <div/>
            o 800 to 850: Excellent individuals in this range are low-risk borrowers. They may have an easier time securing a loan than borrowers with lower scores.
            <div/>
            o 740 to 799: Very good individuals in this range have demonstrated a history of positive credit behavior and may have an easier time being approved for additional credit.
            <div/>
            o 670 to 739: Good Lenders generally view those with credit scores of 670 and up as acceptable or lower-risk borrowers.
            <div/>
            o 580 to 669: Fair Individuals in this category are often considered “subprime” borrowers. Lenders may consider them higher risk, and they may have trouble qualifying for new credit.
            <div/>
            o 300 to 579: Poor individuals in this range often have difficulty being approved for new credit. If you find yourself in the poor category, it's likely you'll need to take steps to improve your credit scores before you can secure any new credit.
            <div/>

            <h2>Credit Bureau</h2>
            Three major US credit bureaus: Equifax, Experian, and TransUnion. Credit bureaus collect credit history such as accounts, payments, and inquiries. Lenders buy data for loan decisions. if you have any errors in your credit report you can dispute errors with the credit bureaus, they will investigate and correct them if need be. You can access free scores at AnnualCreditReport.com.

            <h2>What is a Credit Card used for?</h2>
            - Credit cards allow users to borrow money to pay for goods and services. They offer convenience, security, and rewards, but can be dangerous if not used responsibly. In order to use your credit cards responsibly you have to, pay your bills on time and in full, only charge what you can afford to pay back., use your credit card for purchases that you would have made anyway, take advantage of rewards programs, and monitor your credit report regularly.
            <div/>
            - There are many credit card types credit cards for building credit, credit cards for students (no-cosign), credit cards with rewards (Travel, Hotel, Dining, Gas, Entertainment), credit cards with cashback, and Store Card (e.g., retail stores)
            <div/>

            <h2>Improving credit score:</h2>
            - There are many ways to improve your credit score but some basic tips to help you improve it are:
            <div/>
            - To pay on time this is the most important thing to improve your credit.
            <div/>
            - Keep credit utilization low as your credit utilization is the percentage of your available credit that you are using. A good goal is to keep your credit utilization below 30%.
            <div/>
            - Don’t close accounts as closing old credit accounts can hurt your credit score.
            <div/>
            - Dispute errors, if you see any errors on your credit report, dispute them immediately.

            <h2>Factors that affect credit scores:</h2>
            - Payment history (35%)
            <div/>
            - Credit utilization (30%)
            <div/>
            - Length of credit history (15%)
            <div/>
            - New credit inquiries (10%)
            <div/>
            - Public records (10%)

            <h3>What decreases credit score?</h3>
            - Late: Making late payments
            <div/>
            - Carrying: Carrying a high balance on your credit cards.
            <div/>
            - Closing: Closing old credit accounts.
            <div/>
            - Bankruptcy: Filing for bankruptcy.
            <div/>
            - Collections Having a history of collections.
            <div/>
            - Fraud: Having a history of fraud.
            <div/>


            <button onClick={props.onClose}>Close</button>
        </center>
    )


}

export default Credit