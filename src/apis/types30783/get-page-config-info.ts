export interface GetPageConfigInfoRequestType {
  /**
   * 不同配置页对应的id，后期需要抽象为枚举
   */
  pageType?: any;
}
export interface GetPageConfigInfoResponseType {
  responseStatus?: ResponseStatusType;
  /**
   * 单页所需的配置信息
   */
  pageConfigList?: PageConfigInfo[];
}
export interface PageConfigInfo {
  singlePageConfigList?: PageConfSingleInfo[];
  /**
   * 场景
   */
  scene?: any;
}
export interface PageConfSingleInfo {
  label: string;
  value: string;
  /**
   * 拓展信息
   */
  extra?: string;
}
export interface ResponseStatusType {
  timestamp?: string;
  ack?: AckCodeType;
  errors?: ErrorDataType[];
  build?: string;
  version?: string;
  extension?: ExtensionType[];
  /**
   * 描述信息
   */
  responseDesc?: string;
  userID?: string;
  msg?: string;
  /**
   * 响应编码（20000：成功）
   */
  responseCode?: number;
}
export interface ExtensionType {
  /**
   * ExtensionType
   */
  id?: string;
  /**
   * ExtensionType
   */
  version?: string;
  /**
   * ExtensionType
   */
  contentType?: string;
  /**
   * ExtensionType
   */
  value?: string;
}
export interface ErrorDataType {
  Message?: string;
  /**
   * A unique code that identifies the particular error
   *  condition that occurred.
   */
  errorCode?: string;
  /**
   * ErrorDataType
   */
  stackTrace?: string;
  /**
   * ErrorDataType
   */
  severityCode?: SeverityCodeType;
  /**
   * ErrorDataType
   */
  errorFields?: ErrorFieldType;
  /**
   * ErrorDataType
   */
  errorClassification?: ErrorClassificationCodeType;
}
export interface ErrorFieldType {
  /**
   * ErrorFieldType
   */
  fieldName?: string;
  /**
   * ErrorFieldType
   */
  errorCode?: string;
  /**
   * ErrorFieldType
   */
  message?: string;
}
enum ErrorClassificationCodeType {
  ServiceError = 0,
  ValidationError = 1,
  FrameworkError = 2,
  SLAError = 3,
}
enum SeverityCodeType {
  Error = 0,
  Warning = 1,
}
enum AckCodeType {
  Success = 0,
  Failure = 1,
  Warning = 2,
  PartialFailure = 3,
}
