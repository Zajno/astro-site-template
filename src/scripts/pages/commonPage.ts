import Page from 'src/scripts/core/page';
import Lazy from 'src/scripts/components/lazy';
import 'src/scripts/appBreakpoints';

// import Modal from 'app/components/common/modal';

/** Base page for all site pages */
export default abstract class CommonPage extends Page {
    // private modal: Modal;

    start() {
        super.start();
        Lazy.RegisterAllImages();
        window.appReady(() => {
            Lazy.BeginLoading();
        });

        // example setup modal component

        // this.modal = new Modal({
        //     el: document.querySelector('.modal-cs'),
        //     modal: document.querySelector('.modal-cs'),
        //     openButton: document.querySelector('.modal-cs-open'),
        //     closeButton: document.querySelector('.modal-cs .modal-close'),
        // });
        // this.modal.doSetup();

    }
}
