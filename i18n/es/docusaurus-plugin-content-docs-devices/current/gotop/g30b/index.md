---
slug: /gotop/g30b
id: g30b
sidebar_label: G30B
sidebar_class_name: menu_item_tracker
---
# GOTOP - G30B

![G30B](./tracker.jpg)

# Longtime G30B GPS Tracker

Fabricante: Longtime

El Longtime G30B es un rastreador GPS compacto montado con imán, compatible con Plaspy, diseñado para el seguimiento a largo plazo y de bajo mantenimiento de vehículos y activos móviles. Diseñado para ser discreto pero robusto, el G30B combina posicionamiento híbrido GPS+Beidou \(BD\)+LBS con una batería interna de 4200 mAh y potentes imanes NdFeB para una fijación rápida sin instalación permanente. Su pequeño formato y su larga vida en modo de espera lo convierten en una opción excelente cuando se requieren mantenimientos poco frecuentes y actualizaciones de ubicación fiables.

Construido para la gestión de flotas en escenarios reales y aplicaciones de antirrobo, el G30B ofrece posicionamiento preciso \(~5 m típico\), horarios de trabajo configurables, alarmas de manipulación/desmontaje y modos de anti-detección. Como rastreador GPS compatible con Plaspy, proporciona seguimiento y telemetría en tiempo real confiables a la plataforma Plaspy y puede integrarse con periféricos adicionales a través de su interfaz UART para complementar flujos de trabajo de encendido, inmovilizador o monitorización de combustible externa.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real sin interrupciones y gestión centralizada de la flota.
- Posicionamiento híbrido GPS+Beidou+LBS con una precisión de ~5 m para datos de ruta y ubicación fiables.
- Vida de espera ultra larga—batería interna de 4200 mAh, 3V, de litio manganeso; vida de espera declarada de hasta 3 años \(según configuración y frecuencia de reporte\).
- Carcasa ABS compacta montada con conjunto de imanes NdFeB fuertes para una fijación rápida y discreta \(73.5 x 42.8 x 31.2 mm; 94 g\).
- Funciones avanzadas de antirrobo: alarma de manipulación/desmontaje y modos de operación anti-detección para ayudar a proteger activos de alto valor.
- Módulo celular MT6261D integrado que soporta redes 4G/2G con Micro SIM y antena interna para una cobertura amplia.
- Diseño de bajo consumo: corriente en reposo ultra baja \(~5.5 µA a 3V\) y horarios configurables para prolongar la vida operativa.

## Cómo funciona con Plaspy

Al conectarse a la plataforma Plaspy, el G30B transmite actualizaciones de ubicación y estado utilizando su posicionamiento híbrido GNSS + LBS. Plaspy ingiere estos paquetes de telemetría para seguimiento en tiempo real, alertas, reproducción histórica e informes de flota. La cadencia de reporte del dispositivo, los horarios de trabajo y los umbrales de alerta pueden configurarse para equilibrar la visibilidad inmediata con una mayor duración de la batería.

- Actualizaciones de ubicación y telemetría en tiempo real \(GNSS + Beidou + LBS\) enviadas a Plaspy para visualización en mapa y geocercas.
- Alarma de manipulación/desmontaje y modo anti-detección enviados como eventos de seguridad a Plaspy para flujos de trabajo antirrobo.
- Estado de la batería y telemetría de reposo de ultra bajo consumo para ayudar a planificar el mantenimiento sin sorpresas.
- Horarios de trabajo configurables para limitar las ventanas de transmisión y extender la vida de espera mientras se mantiene activo el seguimiento en tiempo real esencial.
- Opción de integración UART \(TTL 3.3V\) para conectar módulos externos; útil para emparejar el G30B con interfaces de inmovilizador o sensores de encendido/monitorización de combustible de terceros cuando así lo requieran las flotas.
- Plaspy también puede combinar la telemetría del G30B con otras fuentes de datos \(por ejemplo, sensores Bluetooth conectados a dispositivos auxiliares\) para proporcionar una visibilidad más amplia sobre temperatura, estado de la carga o comportamientos del conductor.

## Resumen técnico

| Conectividad | 4G / 2G \(módulo MT6261D\), Micro SIM, antena celular interna |
| --- | --- |
| Bandas | Las bandas específicas dependen de la variante suministrada y del soporte del operador \(no especificado en la documentación del dispositivo\) |
| Alimentación y batería | 4200 mAh, batería interna de 3V de litio manganeso; vida de espera declarada de hasta 3 años \(dependiendo de la configuración y la frecuencia de reporte\) |
| Características eléctricas | Tensión de funcionamiento DC 2.5V–3.6V; corriente de trabajo 35–120 mA @3V; corriente en reposo ~5.5 µA @3V |
| Interfaces | Sensor de luz interno; una canal UART-TTL de 3.3V para configuración o integración externa |
| GNSS | Chipset ZKMicro AT6558D \(GPS + Beidou + LBS\), precisión ~5 m; arranque en frío ~32 s; arranque en caliente ~1 s; sensibilidad de seguimiento ~-162 dBm |
| Bluetooth | No incluido \(se puede emparejar con dispositivos BLE externos a través del ecosistema de Plaspy si es necesario\) |
| Gestión remota | Configuración vía UART y operación remota mediante los reportes estándar del dispositivo; FOTA no especificado |
| Formato y montaje | Carcasa ABS, conjunto de imanes NdFeB para montaje no permanente; tamaño 73.5 x 42.8 x 31.2 mm; peso 94 g |
| Ambiental | Temperatura de operación -20 °C a 70 °C; almacenamiento -30 °C a 80 °C; humedad relativa 5%–95% |

## Casos de uso

- Rastreo de vehículos de alquiler — instalación discreta y magnetizada con larga vida de batería reduce ciclos de recuperación y mantenimiento, al tiempo que permite el seguimiento en tiempo real en Plaspy.
- Vehículos financiados o en crédito — alertas de antirrobo y detección de manipulación ayudan a proteger el colateral y proporcionan historial de eventos para flujos de recuperación.
- Taxis y vehículos de pasajeros — la precisión de la ubicación y los informes configurables permiten a los operadores monitorizar rutas y responder a incidentes sin requerir un consumo continuo de energía.
- Camiones y remolques — vida de espera prolongada y respaldo LBS garantizan visibilidad constante para activos de largo recorrido cuando la conexión eléctrica regular es intermitente.
- Seguimiento general de activos — ideal para equipos móviles o contenedores que requieren monitorización de larga duración y protecciones anti-robo con un mantenimiento mínimo.

## Por qué elegir este rastreador con Plaspy

El Longtime G30B ofrece una combinación enfocada de longevidad, montaje discreto y posicionamiento GNSS fiable que se integra a la perfección con la plataforma de seguimiento y telemetría en tiempo real de Plaspy. Para equipos de gestión de flotas y propietarios de activos que priorizan despliegues de bajo mantenimiento y capacidades anti-robo, el G30B reduce la carga operativa al tiempo que proporciona los datos críticos de ubicación y estado que Plaspy necesita para alertas, reproducción e informes.

Si bien el G30B se centra en una larga vida en reposo y un posicionamiento preciso GNSS+Beidou, Plaspy facilita la ampliación de la solución con telemetría adicional como monitoreo de encendido o combustible a través de módulos externos conectados mediante la interfaz UART del dispositivo, o combinando las fuentes de ubicación del G30B con sensores Bluetooth y otras fuentes de datos IoT gestionadas en el ecosistema de Plaspy. Esta flexibilidad le permite crear una solución personalizada de anti-robo y gestión de flotas sin sobre-especificar el rastreador.

