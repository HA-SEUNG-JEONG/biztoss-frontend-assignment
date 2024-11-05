import Clock from "../assets/clock.png";
import Write from "../assets/write.png";
import Shield from "../assets/shield.png";

const BusinessForm = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
                <div className="p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-left ">
                        비즈니스 매각 신청 폼
                    </h2>

                    <section className="flex flex-col items-start gap-4 bg-gray-50 p-6 rounded-lg text-sm">
                        {/* svg */}
                        <div className="flex items-center gap-2">
                            <img className="w-6 h-6" src={Clock} alt="clock" />
                            <h2>
                                매물 등록 예상 요소 시간 :{" "}
                                <strong className="text-blue-600 font-bold">
                                    5~10분
                                </strong>
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-6 h-6" src={Write} alt="write" />
                            <h2>
                                폼을 작성완료하면 대표님의 서비스가{" "}
                                <strong className="text-blue-600 font-bold">
                                    [매물 둘러보기]
                                </strong>
                                에 게시돼요.
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                className="w-6 h-6"
                                src={Shield}
                                alt="shield"
                            />
                            <h2>
                                <h2>
                                    대표님께서 작성한 매물 정보는
                                    <strong className="text-blue-600 font-bold">
                                        비밀유지계약서(NDA)
                                    </strong>
                                    를 작성한 Buyer 분들에게만 공개돼요.
                                    사업정보 유출에 대해 안심하셔도 돼요.
                                </h2>
                            </h2>
                        </div>
                    </section>
                    <section className="text-left">
                        <h1 className="text-lg font-semibold mt-2">
                            대표님의 비즈니스 정보를 사실에 기반하여
                            작성해주세요.
                        </h1>
                        <h3 className="text-sm my-2 text-gray-800">
                            대표님께서는 비즈니스 매각을 어느정도 고려하고
                            계시나요?
                            <sup className="text-red-600">*</sup>
                        </h3>
                        <div className="flex flex-col items-start my-4 space-y-2">
                            <label htmlFor="business-consideration">
                                <input
                                    type="radio"
                                    name="business"
                                    className="mr-2 w-4 h-4"
                                />
                                <span>추후 매각 고려중</span>
                            </label>
                            <label htmlFor="business-urgency">
                                <input
                                    type="radio"
                                    name="business"
                                    className="mr-2 w-4 h-4"
                                />
                                <span>매각 급함</span>
                            </label>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-sm my-2 text-left text-gray-800">
                            매각하시려는 서비스의 분야를 알려주세요.
                            <sup className="text-red-600">*</sup>
                        </h3>
                        <div className="flex flex-col items-start my-4 space-y-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="software"
                                    className="rounded w-4 h-4 border-gray-300 text-blue-600"
                                />
                                <span className="ml-2">
                                    쇼핑몰{" "}
                                    <span className="text-gray-500">
                                        (자사몰, 스마트스토어, 쿠팡 등)
                                    </span>
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="website"
                                    className="rounded w-4 h-4 border-gray-300 text-blue-600"
                                />
                                <span className="ml-2">
                                    웹사이트{" "}
                                    <span className="text-gray-500">
                                        (유튜브, 인스타 등 SNS 계정, 세금 계산기
                                        사이트 등)
                                    </span>
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="application"
                                    className="rounded w-4 h-4 border-gray-300 text-blue-600"
                                />
                                <span className="ml-2">
                                    어플리케이션{" "}
                                    <span className="text-gray-500">
                                        (안드로이드, ios 등)
                                    </span>
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="saas"
                                    className="rounded w-4 h-4 border-gray-300 text-blue-600"
                                />
                                <span className="ml-2">
                                    솔루션{" "}
                                    <span className="text-gray-500">
                                        (SaaS 등)
                                    </span>
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    value="etc"
                                    className="rounded w-4 h-4 border-gray-300 text-blue-600"
                                />
                                <span className="ml-2">
                                    기타:
                                    <input
                                        type="text"
                                        placeholder="직접 입력"
                                        className="bg-gray-100 ml-2 p-1 rounded-sm"
                                    />
                                </span>
                            </label>
                        </div>
                    </section>

                    {/* 서비스 기본 정보 */}
                    <div className="">
                        <div>
                            <label className="block text-sm text-left font-medium text-gray-700">
                                해당 서비스의 이름을 알려주세요.{" "}
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-left font-medium text-gray-700">
                                매각하려는 온라인 서비스의 URL이 있다면, 주소를
                                입력해주세요.
                            </label>
                            <input
                                type="url"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-left font-medium text-gray-700">
                                사업자등록증이 있으시다면, 파일을
                                업로드해주세요. (.png or .jpg 형식)
                            </label>
                            <input
                                type="file"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                                accept=".png, .jpg"
                            />
                        </div>

                        {/* 매출 정보 */}
                        <div>
                            <label className="block text-sm text-left font-medium text-gray-700">
                                해당 서비스의 대략적인 월 영업이익을 선택해
                                주세요.
                            </label>

                            <div className="flex flex-col items-start my-4 space-y-2">
                                <label htmlFor="business-consideration">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>거의 없음 (10만원 이하)</span>
                                </label>
                                <label htmlFor="business-urgency">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>10~100만원</span>
                                </label>
                                <label htmlFor="business-urgency">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>100~500만원</span>
                                </label>
                                <label htmlFor="business-urgency">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>500~1000만원</span>
                                </label>
                                <label htmlFor="business-urgency">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>1000~3000만원</span>
                                </label>
                                <label htmlFor="business-urgency">
                                    <input
                                        type="radio"
                                        name="business"
                                        className="mr-2 w-4 h-4"
                                    />
                                    <span>3000만원 이상</span>
                                </label>
                            </div>
                        </div>

                        {/* 서비스 유형 */}
                        <div>
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                해당 서비스의 희망 매각가를 알려주세요.{" "}
                                <div className="text-sm flex ">
                                    구체적인 가격이 정해지지 않았다면, 금액대를
                                    입력하셔도 좋습니다.
                                </div>
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                        </div>

                        {/* 협업 가능 여부 */}
                        <div className="flex flex-col items-start">
                            <label className=" text-sm font-medium text-gray-700">
                                가격 협의 가능 여부를 선택해주세요.{" "}
                                <sup className="text-red-600">*</sup>
                            </label>
                            <div className="mt-2 space-y-2 flex flex-col">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="possible"
                                        className="rounded-full border-gray-300 text-blue-600"
                                    />
                                    <span className="ml-2">협업 가능</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="impossible"
                                        className="rounded-full border-gray-300 text-blue-600"
                                    />
                                    <span className="ml-2">협업 불가</span>
                                </label>
                            </div>
                        </div>

                        <h1 className="text-lg font-semibold mt-2 mb-4">
                            대표님의 비즈니스를 비즈토스에 홍보해주세요.
                        </h1>
                        <div>
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                대표님의 비즈니스를 어필할 수 있는 매물 제목을
                                정해주세요.{" "}
                                <div className="text-sm flex ">
                                    매물등록 시 제목으로 등록되는 답변입니다.
                                    예: 심플하고 러블리한 1020대 쇼핑몰
                                </div>
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                대표님의 비즈니스를 Buyer 분들에게 최대한 어필할
                                수 있도록 비즈니스 설명을 적어주세요.{" "}
                                <div className="text-sm flex ">
                                    *추천항목 : 이 비즈니스의 특징 및 차별성/
                                    장점, 이 비즈니스를 어떤 성향의 대표님께
                                    추천하는지, 비즈니스 시작 계기, 매각을
                                    결정하게 된 사유 등
                                </div>
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full h-24 rounded-sm bg-gray-100 shadow-sm"
                            />
                        </div>
                        <h1 className="text-lg font-semibold mt-2 mb-4">
                            매물 등록을 위한 기타 정보를 입력해 주세요.
                        </h1>
                        <div>
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                바이어 분과 컨택하실 연락처를
                                입력해주세요.(이메일, 전화번호 등){" "}
                                <div className="text-sm flex ">
                                    * 입력하신 번호는 매물 등록 상세 페이지에
                                    공개됩니다. 사이트에 공개되어도 무방한
                                    메일주소/번호를 남겨주세요.
                                </div>
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                비즈토스와 컨택하실 연락처를 입력해주세요.
                                (이메일, 전화번호 등){" "}
                                <div className="text-sm flex ">
                                    * 등록하신 매물이 리스트에 업로드 되면
                                    연락을 보내드립니다. 외부에 공개되지 않는
                                    연락처이니, 자주 사용하시는 연락처를
                                    입력해주세요.
                                </div>
                                <sup className="text-red-600">*</sup>
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-sm bg-gray-100 shadow-sm"
                            />
                            <label className="flex flex-col text-md text-left font-medium text-gray-700">
                                대표님 비즈니스의 거래 완료 여부를 파악하기 위해
                                비즈토스에서는 매달 10일 대표님께 연락을 취할
                                예정입니다.{" "}
                                <div className="text-sm flex ">
                                    거래 확인 연락 응답에 동의해주셔야 매각
                                    등록이 완료됩니다.
                                </div>
                                <sup className="text-red-600">*</sup>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        className="mt-1 block"
                                    />
                                    <span className="text-[0.8rem]">
                                        네, 동의합니다.
                                    </span>
                                </div>
                                <div className="text-[0.7rem] flex">
                                    앱/웹의 로고, 쇼핑몰 로고 및 각종
                                    영상/이미지 등 사업을 영위하기 위해 필요한
                                    각종 디자인이나 이름 등에 대하여 타인의
                                    상표권, 저작권및 기타 권리를 침해한 사실이
                                    없습니다.
                                </div>
                                <sup className="text-red-600">*</sup>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        className="mt-1 block "
                                    />
                                    <span className="text-[0.8rem]">
                                        네, 없습니다.
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 text-sm font-semibold bg-[#17c1a0] text-white rounded-md hover:opacity-80"
                    >
                        매물 등록 완료
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BusinessForm;
