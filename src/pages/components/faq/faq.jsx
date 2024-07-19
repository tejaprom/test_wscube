import React from 'react';
import './faq.scss';
import {
    ExpansionList,
    ExpansionPanel,
    usePanels,
} from '@react-md/expansion-panel';

const FAQs = () => {
    const [panels, onKeyDown] = usePanels({
        count: 10,
        idPrefix: "configuring-panels",
    });


    return (
        <div>
            <div className='help'>
                <div className='help__container'>
                    <h1>FAQs</h1>
                    <div className='help__sections'>
                        <ExpansionList onKeyDown={onKeyDown}>
                            <ExpansionPanel {...panels[0]} header='1. Which billing software is the best?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>The best billing software is the Akountant. Access to a number of practical functions is made possible by the Akountant. For company owners, they can simplify the management process. You can save a good amount of time and effort by using our billing tool instead of manually generating GST invoices.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[1]} header='2. What kind of mechanism is used by the billing system?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>Billing software generally assists in the creation and transmission of GST invoices. You can keep tabs on the goods and services your clients use. Additionally, it enables you to receive payments. Some billing systems, like Akountant, can do much more, though. You can use Akountant to automate your routine business chores. Accounts can be managed, and you can make business reports as well.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[2]} header='3. What is business management and briefly explain the role of ERP software in managing organizational processes?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>Business management means handling each organizational department flawlessly. Enterprise Resource Management (ERP) software is a business management solution that automates controlling and monitoring critical processes across departments and stores crucial data in secure data repositories. Moreover, it only allows verified stakeholders to create, share, and access data with others at the click of a button.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[3]} header='4. What are the benefits of cloud-based software over on-premise ERP software?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>The primary benefit of cloud software over on-premise ERP is that the former allows businesses to work remotely. For example, sales representative can gather client data on the move. They can perform mission-critical tasks while staying at the office instead of visiting the client’s place. On the other hand, on-premise ERP is installed inside the company’s premises and requires trained professionals for maintaining and updating the system regularly. Moreover, remote work is out of the question as employees need to visit the client’s place for collecting crucial data. Also, it’s more expensive than cloud-ERP as it entails massive infrastructure costs.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[4]} header='5. Why companies should choose Akountant?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>Akountant is a globally renowned multifunctional ERP software because it has a flexible architecture that changes with your business requirements. It significantly improves collaboration with vendors, suppliers & distributors and supports multiple languages and currencies.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[5]} header='6. What is billing software?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>Businesses use billing software to give clients better-looking custom invoices. The identity of the company is reflected in these invoices. It also reflects the value of the company to customers.</h5>
                                <h5>Utilizing the GST billing software Akountant, you can stand out among competitors. It includes attractive invoice designs that can be completely customised. Additionally, you can track paid and unpaid bills using the billing app's dashboard. Customers may also receive payment notifications.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[6]} header='7. What is the price of invoicing software?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>On Android smart phones, you can always use Akountant billing software. The only fees associated with Akountant billing software is access to premium functions. By using trial access in desktop software, you can try premium functions without paying.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[7]} header='8. What are the different kinds of billing?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>There are several billing mechanisms from which to choose and they can be classified based on the type of your company's financial activities. Some of them are as follows:</h5>
                            <ul>
                                <h6><li>• Milestone Billing</li></h6>
                                <h6><li>• Progress Billing</li></h6>
                                <h6><li>• Sub-line-item Billing</li></h6>
                                <h6><li>• Billing on Completion</li></h6>
                                <h6><li>• Billing for ongoing Services</li></h6>
                                <h6><li>• Prorated Billing</li></h6>
                            </ul>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[8]} header='9. What is the best software for GST billing?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>Businesses that sell goods and services must file GST bills. It is governed by the Goods and Services Tax law. To comply with the most recent GST laws, you can use the Akountant billing software. You can send them to customers digitally or print them. You can also use the app's data to generate business reports.</h5>
                            </ExpansionPanel>
                            <ExpansionPanel {...panels[9]} header='10. How can I invoice clients for free?'
                                expandIcon="fa fa-plus"
                                collapseIcon="fa fa-minus">
                                <h5>You can generate both GST and non-GST invoices for your customers. All you need to do is use the best billing software- Akountant. You can download the Akountant invoicing software for free. Begin by entering new party information. You can generate and send invoices without paying any charges.</h5>
                            </ExpansionPanel>
                        </ExpansionList>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs;