import { LitElement, html, css } from 'lit-element';

class AppHome extends LitElement {
    static get properties() {
        return {
            options: { type: Object },
            dashboard: { type: String }
        }
    }

    constructor() {
            super();
            this.options = {
                url: 'https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307',
                //l: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId                         ?isauthcode=true&identityprovider=quicksight&code=authcode",
                container: this.shadowRoot.getElementById("embeddingContainer"),
                parameters: {
                    country: "United States",
                    states: [
                        "California",
                        "Washington"
                    ]
                },
                scrolling: "no",
                height: "700px",
                width: "1000px",
                locale: "en-US",
                footerPaddingEnabled: true,
                //defaultEmbeddingVisualType: TABLE // this option only applies to experience embedding and will not be used for dashboard embedding
            };

        }
        /**
        * <!--<div>${this.showDashboard()}</div>
                <div>${this.show3()}</div>-->
        */

    render() {
        return html `
        <script src=></script>
        
        <!--<iframe title="Dasboards" src="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"></iframe>-->
        <a href="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/953ae31e-2158-4d08-9b83-9bf7b094a307"><h1>Home Dashboard</h1></a>
        <div id="embeddingContainer"></div> 
        `;
    }

    showDashboard() {
        console.log("mostrando dashboard")
        let script = document.createElement('script');
        script.onload = this.show2.bind(this);

        script.src = "https://unpkg.com/amazon-quicksight-embedding-sdk@1.0.11/dist/quicksight-embedding-js-sdk.min.js";

        //this.shadowRoot.getElementById("embeddingContainer")


        return script;

    }
    show2() {
        console.log('mostrando 2...')
    }
    show3() {
        console.log('mostrando 3...')
        this.dashboard = QuickSightEmbedding.embedDashboard(this.options);
        this.dashboard.on("error", onError);
        this.dashboard.on("load", onDashboardLoad);
    }
}

customElements.define('app-home', AppHome);