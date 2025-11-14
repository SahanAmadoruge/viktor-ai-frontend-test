import { Col, Input, Row } from "antd";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("search") ?? "";

  const handleChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set("search", value);
    else newParams.delete("search");
    setSearchParams(newParams);
  };

  return (
    <div className="my-8 flex">
      <Row>
        <Col>
          <Input
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            value={searchValue}
            placeholder="Search by title"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
