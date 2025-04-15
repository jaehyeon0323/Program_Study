// input, textarea 입력 변경 이벤트
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>;

// 키보드 이벤트 (예: Enter 처리)
export type KeyboardInputEvent = React.KeyboardEvent<HTMLInputElement>;

// 클릭 이벤트
export type MouseClickEvent = React.MouseEvent<HTMLButtonElement>;

// 폼 제출 이벤트
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;