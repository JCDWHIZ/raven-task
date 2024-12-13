import "./index.css";
import { useContent } from "../../../hooks/useContent";
import MobileChart from "../../chart";
import { useModal } from "../../../hooks/useModal";
import MobileOrders from "../../mobile-orders";
import OrderSection from "../../orders-section";
import MobileModal from "../../modal";

export default function MobileContent() {
  const { activeTab, handleSwitchTab } = useContent();
  const { modalType, isModalOpen, setModalType, setIsModalOpen } = useModal();

  return (
    <section className="mobile_content">
      <div className="mobile_content-tab">
        <div
          className={`${
            activeTab === 1 && "active"
          }  mobile_content-tab-links charts`}
          onClick={() => handleSwitchTab(1)}
        >
          Charts
        </div>
        <div
          className={`${
            activeTab === 2 && "active"
          }  mobile_content-tab-links orderbook`}
          onClick={() => handleSwitchTab(2)}
        >
          Orderbook
        </div>
        <div
          className={`${
            activeTab === 3 && "active"
          }  mobile_content-tab-links recent-trade`}
          onClick={() => handleSwitchTab(3)}
        >
          Recent trades
        </div>
      </div>

      {activeTab === 1 && (
        <MobileChart
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
      )}

      {activeTab === 2 && (
        <MobileOrders
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
      )}
      <OrderSection />
      {isModalOpen && (
        <MobileModal
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
          modalType={modalType}
        />
      )}
    </section>
  );
}
