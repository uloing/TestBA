declare module BA.Ui.TabController {
    class Tab {
        private _Title;
        private _Url;
        private _TabReference;
        private _IsLoaded;
        private _Guid;
        private _IframeName;
        private _Owner;
        private _CanClose;
        private _Dirty;
        private _IsDelayed;
        private _TimeoutId;
        private _PreviousTab;
        private _OpenBehaviorModel;
        private _AutoRefresh;
        private _iframeElement;
        TabProcessId: string;
        constructor(owner: Controller, url: string, tabReference: string, title: string, guid: BA.Classes.Guid, delayLoading?: boolean, canClose?: boolean);
        readonly TabHTMLString: string;
        SetOverflowMaxHeight(height: string): void;
        Activate(): void;
        UpdateInternalTabBar(): void;
        Deactivate(): void;
        Remove(): void;
        SetEventHandlersForTab(tab: JQuery): void;
        Title: string;
        readonly Url: string;
        UpdateUrl(url: string): void;
        readonly TabReference: string;
        readonly IFrameName: string;
        IsLoaded: boolean;
        Guid: BA.Classes.Guid;
        readonly Owner: Controller;
        CanClose: boolean;
        readonly ShowAllowed: boolean;
        Dirty: boolean;
        PreviousTab: Tab;
        AutoRefresh: boolean;
        UpdateDocumentParts(keys: string[]): void;
        GetTitle(): string;
        UpdateTitle(): void;
        LoadDelayed(): void;
        readonly Delayed: boolean;
        ResetAfterLogin(): void;
        HandleOpenBehavior(): void;
        private StartTimeout;
        private CancelTimeout;
        private ShowFatalError;
    }
}
