import { Section, SectionLabel, SectionTitle } from "./Section";

const codeExample = `import { useBLEDevice } from '@ble-toolkit/react-native';

function SensorDashboard({ deviceId }: { deviceId: string }) {
  const { device, connect, disconnect } = useBLEDevice(deviceId, {
    autoReconnect: true,
    retryAttempts: 3,
    retryDelay: 1000,
  });

  const readSensorData = async () => {
    const data = await device.read('SERVICE_UUID', 'CHAR_UUID');
    return parseSensorPayload(data);
  };

  return (
    <View>
      <Text>Status: {device.state}</Text>
      <Button onPress={connect} title="Connect" />
      <Button onPress={readSensorData} title="Read Sensor" />
      <Button onPress={disconnect} title="Disconnect" />
    </View>
  );
}`;

export function CodeExample() {
  return (
    <Section id="code">
      <SectionLabel>Usage</SectionLabel>
      <SectionTitle>Clean API, minimal surface area</SectionTitle>
      <p className="text-text-secondary text-lg mb-8 max-w-2xl leading-relaxed">
        The toolkit exposes a React hook that manages the entire BLE lifecycle.
        Connect, read, write, disconnect — all through a predictable interface.
      </p>
      <div className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden text-left">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
          <span className="text-text-muted text-xs ml-2">
            SensorDashboard.tsx
          </span>
        </div>
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm leading-relaxed text-text-secondary font-mono">
            {codeExample}
          </code>
        </pre>
      </div>
    </Section>
  );
}
