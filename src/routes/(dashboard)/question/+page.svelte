<script>
    import DataTable, {Body, Cell, Head, Row} from '@smui/data-table';
    import LinearProgress from '@smui/linear-progress';
</script>

<h4 style="text-align: center">Questions</h4>

<DataTable style="width: 100%;" table$aria-label="User list">
    <Head>
        <Row>
            <Cell numeric>ID</Cell>
            <Cell style="width: 100%;">제목</Cell>
            <Cell>작성자</Cell>
            <Cell>댓글 수</Cell>
        </Row>
    </Head>
    <Body>
    <Row>
        <Cell numeric>1</Cell>
        <Cell>홍길동</Cell>
        <Cell>가나다</Cell>
        <Cell numeric>4</Cell>
    </Row>
    <Row>
        <Cell numeric>1</Cell>
        <Cell>홍길동</Cell>
        <Cell>가나다</Cell>
        <Cell numeric>4</Cell>
    </Row>
    <Row>
        <Cell numeric>1</Cell>
        <Cell>홍길동</Cell>
        <Cell>가나다</Cell>
        <Cell numeric>4</Cell>
    </Row>

    </Body>

    <LinearProgress
            aria-label="Data is being loaded..."
            indeterminate
            slot="progress"
    />
</DataTable>


<style>

</style>