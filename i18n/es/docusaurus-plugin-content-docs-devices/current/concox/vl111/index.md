---
slug: /concox/vl111
id: vl111
sidebar_label: VL111
sidebar_class_name: menu_item_tracker
---
# Concox - VL111

![VL111](./tracker.png)

El VL111 de VL \(modelo VL111 / VL111S\_LA / VL111S\_EM\) es un rastreador GPS para vehículos con conectividad 4G LTE compacto, diseñado para un seguimiento en tiempo real fiable y discreto compatible con Plaspy. Construido para motocicletas y vehículos ligeros, el VL111 combina GNSS de múltiples constelaciones, conectividad LTE Cat 1 con retroceso a 2G, BLE 5.0 y un relé integrado para inmovilización remota, entregando las funciones principales de telemetría y control en las que confían los gestores de flotas y los distribuidores de vehículos para la protección anti-robo y la monitorización del conductor.

Diseñado para integrarse con plataformas como Plaspy, el VL111 ofrece ubicación continua, reproducción de rutas y telemetría del vehículo, al tiempo que protege la salud de la batería con desconexión de energía automática y una fuente de respaldo interna. Su carcasa robusta con certificación IP66, su ligereza y su compacto formato facilitan su instalación en una amplia gama de vehículos, manteniendo los canales de telemetría y control que exigen la gestión moderna de flotas, programas de monitoreo de combustible y flujos de trabajo anti-robo.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y reporte de telemetría seguro vía LTE Cat 1 con retroceso a 2G GSM.
- GNSS de alta precisión multicostelación: GPS, BeiDou \(BDS\), GLONASS con AGPS y retroceso LBS \(precisión \< 2.5 m CEP\).
- Relé PCB integrado para inmovilización remota / corte de combustible o de energía, compatible con la prevención de robo y flujos de trabajo de retorno al servicio.
- BLE 5.0 y antena Bluetooth interna para conectividad de sensores y casos de uso de proximidad con bajo consumo de energía.
- Monitoreo de voltaje del vehículo 0–90V; respaldo de batería interna y desconexión automática de la alimentación para proteger la batería del vehículo.
- Telemetría de comportamiento de conducción mediante acelerómetro a bordo: aceleración brusca, frenada brusca, giro brusco y detección de colisión.
- Carcasa IP66 robusta, amplio rango de temperatura \(−20°C a +70°C\) y formato compacto para una instalación fácil y discreta.

## Cómo funciona con Plaspy

El VL111 transmite las posiciones GNSS, telemetría del vehículo y datos de eventos a Plaspy a través de LTE Cat 1 \(con retroceso a 2G\) para que los despachadores y gestores puedan utilizar el tablero de Plaspy para el monitoreo en tiempo real, alertas y análisis histórico. La integración típica toma los paquetes periódicos de ubicación/telemetría del dispositivo y los mapea en la vista en tiempo real de Plaspy, lo que habilita acciones de mando y control desde la plataforma.

- Actualizaciones de ubicación y telemetría en tiempo real: posiciones GNSS, velocidad, rumbo y historial de ubicación con marca de tiempo para seguimiento en vivo y reproducción de trayectos.
- Control del inmovilizador / relé: corte remoto \(combustible o energía\) soportado por el relé a bordo; Plaspy puede emitir comandos de inmovilización cuando la conexión entre el dispositivo y la plataforma lo permita.
- Salud del vehículo y telemetría de la batería: monitoreo de voltaje y alertas de batería interna baja para proteger la alimentación del vehículo y permitir el mantenimiento programado.
- Eventos de comportamiento de conducción y seguridad: alertas de conducción brusca y colisiones basadas en el acelerómetro que alimentan a Plaspy para coaching del conductor e informes de seguridad.
- Sensores Bluetooth y balizas de proximidad: compatibilidad con BLE 5.0 para futuras integraciones de sensores o emparejamiento de dispositivos locales para ampliar la telemetría y el contexto del activo.

## Resumen técnico

| Conectividad | LTE Cat 1 con retroceso a 2G GSM |
| --- | --- |
| Bandas / Variantes | Variantes regionales VL111S\_LA y VL111S\_EM que soportan diferentes bandas LTE \(según la región\) |
| GNSS | GPS, BeiDou \(BDS\), GLONASS, AGPS; retroceso LBS; precisión de posicionamiento \< 2.5 m CEP |
| Alimentación y Batería | Detección de voltaje del vehículo 0–90V; respaldo de batería interna; desconexión automática de la alimentación ante un nivel crítico de batería externa; modo de espera \<5 mA, funcionamiento \<50 mA |
| Interfaces e I/O | Ranura nano-SIM, puerto USB Type-C, un relé a bordo de la PCB \(corte remoto\), compatibilidad con zumbador externo, detección de vibración/manipulación |
| Sensores | Acelerómetro integrado para la detección del comportamiento de conducción y colisiones |
| Bluetooth | BLE 5.0 con antena Bluetooth interna para sensores y balizas |
| Almacenamiento de datos | Almacenamiento a bordo de hasta 3,000 entradas GPS para reproducción fuera de línea y recuperación |
| Robustez y entorno | Clasificación IP66; rango de temperatura de operación −20°C a +70°C |
| Factor de forma | Compacto: 92.0 x 28.0 x 14.0 mm; peso 42.9 g |
| Gestión remota | Configuración vía herramientas para PC, comandos por SMS y la plataforma Tracksolid Pro |
| Certificaciones | CE, FCC |

## Casos de uso

- Gestión de flotas para vehículos ligeros y motocicletas: seguimiento en tiempo real, reproducción de rutas y monitoreo del comportamiento del conductor para mejorar la eficiencia operativa.
- Protección anti-robo para motocicletas y inventario de distribuidores: inmovilización remota más geocercas y alertas de vibración/manipulación para una respuesta rápida.
- Programas de protección de batería y energía: desconexión automática de la alimentación y respaldo de batería interna para evitar el drenaje de la batería del vehículo durante largos periodos de inactividad.
- Seguridad y cumplimiento: eventos basados en el acelerómetro \(frenadas/arranques bruscos\) alimentan a Plaspy para coaching, revisión de incidentes y flujos de trabajo de seguros.
- Instalaciones discretas de activos: formato compacto y robusto adecuado para distribuidores y flotas de alquiler que requieren monitorización GPS poco intrusiva.

## Por qué elegir este rastreador con Plaspy

El VL111 ofrece la combinación práctica de precisión, robustez y control que requieren los operadores de flotas y los distribuidores en un rastreador GPS compatible con Plaspy. Su conectividad LTE Cat 1 con retroceso a 2G garantiza un seguimiento en tiempo real robusto, mientras que el GNSS de múltiples constelaciones y el almacenamiento en búfer de datos respaldan informes de ubicación fiables tanto en entornos urbanos como rurales. El inmovilizador a bordo para inmovilización, la protección de la tensión de la batería y un perfil de bajo consumo hacen del VL111 una opción especialmente valiosa para programas anti-robo y despliegues de flotas a largo plazo donde importan las estrategias de monitoreo de combustible y la salud de la batería.

Integrar el VL111 con Plaspy permite a los operadores acceder de forma inmediata a la ubicación en tiempo real, telemetría, datos de eventos del conductor y funciones de control remoto desde una única plataforma, lo que ayuda a reducir pérdidas por robo, mejorar el monitoreo de combustible mediante insights de comportamiento y rutas, y gestionar vehículos a gran escala con configuración y reporte remoto. Para las organizaciones que buscan un rastreador compacto y probado, con telemetría robusta y capacidad de inmovilización, el VL111 es una opción fiable compatible con Plaspy.

