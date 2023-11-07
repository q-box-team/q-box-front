<script>
    import Button, {Label} from "@smui/button";

    import TopAppBar, {AutoAdjust, Row, Section, Title,} from '@smui/top-app-bar';

    let topAppBar;
</script>


<TopAppBar bind:this={topAppBar} color="secondary" variant="short">
    <Row>
        <Section>
            <Title>QBOX</Title>
        </Section>
        <Section align="end">
            <Button href="/signup" variant="raised">
                <Label>sign up</Label>
            </Button>
            <Button href="/login" variant="outlined">
                <Label>login</Label>
            </Button>
        </Section>
    </Row>
</TopAppBar>
<AutoAdjust {topAppBar}/>