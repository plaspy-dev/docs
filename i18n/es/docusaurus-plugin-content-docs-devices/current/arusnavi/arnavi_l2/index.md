---
slug: /arusnavi/arnavi_l2
id: arnavi_l2
sidebar_label: Arnavi L2
sidebar_class_name: menu_item_tracker
---
# Arusnavi - Arnavi L2

![Arnavi L2](./tracker.png)

El Arnavi L2 es un localizador GPS compacto, herméticamente sellado, diseñado para un seguimiento en tiempo real fiable y telemetría compatible con Plaspy, incluso en entornos húmedos o con alta humedad. Diseñado para activos móviles y gestión de flotas, el L2 combina posicionamiento GNSS de múltiples constelaciones, un módem celular 2G de bajo consumo y Bluetooth Low Energy para proporcionar ubicación precisa, datos de comportamiento de conducción y telemetría de sensores con un esfuerzo de instalación mínimo.

El recinto sellado, las antenas internas para señales celulares, de navegación y Bluetooth, y un arnés de cableado de 60 cm hacen del Arnavi L2 una opción ideal cuando el espacio y la protección ambiental son prioritarios. Con funciones de eco-conducción basadas en acelerómetro integradas, registro de caja negra a bordo y herramientas de configuración remota, el L2 se integra fácilmente con Plaspy para monitorización antirobo, monitoreo de combustible mediante sensores Bluetooth, detección de encendido e supervisión de la flota.

## Puntos clave

- Dispositivo compatible con Plaspy con informes al servidor configurables y soporte para protocolos de telemetría comunes \(INTERNAL, EXTERNAL, USER\_AG, EGTS\).
- GNSS robusto de múltiples constelaciones \(GPS, GLONASS, Galileo, BeiDou, QZSS\) para posicionamientos fiables en entornos desafiantes.
- Carcasa hermética y antenas internas simplifican la instalación y protegen la electrónica de la humedad y de entornos con alta humedad.
- Bluetooth 4.0 LE; admite hasta cinco sensores BLE externos y es compatible con dispositivos Arnavi BLE y sensores BLE de terceros.
- Bajo consumo \(≈2 mA en reposo, ≈40 mA activo\) y rango de tensión de entrada amplio \(8–40 V\) con protección de entrada hasta 60 V para instalaciones versátiles en vehículos y activos.
- Formato compacto \(61 × 42 × 13 mm, ~35 g\) con registrador de datos a bordo \(~8 MB / ~12,000 registros\) para grabación de caja negra sin conexión.
- Acelerómetro a bordo y entrada de encendido permiten análisis de eco-conducción, detección de movimiento e informes basados en eventos para la gestión de la flota.

## Cómo funciona con Plaspy

El Arnavi L2 se puede configurar para reportar directamente a los servidores de monitoreo de Plaspy utilizando sus protocolos de comunicación soportados y la capacidad de reporte a dos servidores. Una vez conectado, Plaspy recibe actualizaciones de ubicación, telemetría y eventos de sensores en tiempo casi real para visualización, alertas y análisis histórico. La configuración remota y las actualizaciones de firmware pueden gestionarse de forma central para mantener los dispositivos alineados con las políticas de la flota.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para seguimiento en vivo y reproducción de rutas.
- Informes de encendido y de eventos a través de la entrada discreta positiva para inicio/fin de viaje, disparadores de identificación del conductor y registro de kilometraje.
- Monitoreo de combustible y telemetría de temperatura mediante sensores Bluetooth compatibles \(BLE\) emparejados con el L2.
- Control remoto de actuadores externos \(salida I/O universal capaz de conmutar hasta 500 mA\) para soportar control de relés tipo inmovilizador o conmutación de dispositivos auxiliares.
- Carga de datos de la caja negra y reporte de respaldo: los registros almacenados están disponibles para que Plaspy los recupere tras la restauración de la señal.

## Visión general técnica

| Conectividad | Módem GSM/GPRS 2G con antena GSM interna; una nano-SIM o ranura SIM embebida |
| --- | --- |
| Bandas | 2G GSM/GPRS \(las bandas soportadas específicas no se listan aquí — consulte la hoja de datos de Arnavi para el soporte regional de bandas\) |
| Potencia y consumo | Voltaje de operación 8–40 V; protección de entrada hasta 60 V; consumo de corriente ≈2 mA \(inactivo\) a ≈40 mA \(activo\) |
| Interfaces | 1 entrada discreta positiva \(encendido/sensor\); 1 entrada/salida universal protegida contra sobretensiones inductivas \(salida hasta 500 mA\); USB para configuración |
| GNSS | Soporta GPS, GLONASS, Galileo, BeiDou, QZSS \(posicionamiento multi-constelación\) |
| Bluetooth | Bluetooth 4.0 LE; admite hasta cinco sensores BLE externos y es compatible con dispositivos Arnavi BLE y sensores BLE de terceros |
| Gestión remota | Configuración remota y actualizaciones de firmware vía web; herramienta de configuración para PC vía USB; aplicación móvil vía Bluetooth o USB |
| Sensores a bordo y almacenamiento | Acelerómetro a bordo para el análisis de movimiento y comportamiento de conducción; registrador de datos interno ~8 MB \(~12,000 registros\) |
| Forma | Carcasa hermética; dimensiones 61 × 42 × 13 mm; peso ≈35 g; incluye arnés de cableado de 60 cm |

## Casos de uso

- Gestión de flotas — datos continuos del localizador GPS y análisis de eco-conducción para reducir costos de combustible y mejorar la seguridad.
- Antirrobo y seguridad — modo de seguridad con etiquetas BLE y alertas de encendido y movimiento para una intervención rápida.
- Monitoreo de combustible y telemetría de temperatura — emparejar sensores BLE de nivel de combustible y temperatura para monitoreo remoto de combustible y supervisión de la cadena de frío.
- Seguimiento de activos en entornos adversos — diseño sellado y hermético para activos que operan en entornos de alta humedad, marítimos o en condiciones húmedas.
- Instalaciones en vehículos pequeños y activos compactos — huella reducida y antenas internas simplifican el montaje cuando el espacio es limitado.

## Por qué elegir este localizador con Plaspy

El Arnavi L2 ofrece un equilibrio entre protección ambiental, posicionamiento multi-constelación y telemetría flexible que lo convierten en un localizador GPS compatible con Plaspy eficaz para una amplia variedad de aplicaciones de vehículos y activos. Su carcasa sellada y las antenas internas reducen la complejidad de instalación y protegen la electrónica frente a la humedad. El soporte Bluetooth LE y el acelerómetro a bordo amplían la telemetría más allá del GPS puro, permitiendo el monitoreo de combustible, la detección de temperatura y conocimientos de eco-conducción que Plaspy puede aprovechar para una gestión de flotas más inteligente y flujos de trabajo anti-robo.

En operación, el perfil de bajo consumo del L2, su amplia tolerancia de voltaje y el registrador de datos a bordo garantizan un funcionamiento continuo en vehículos y activos remotos. La configuración remota, las actualizaciones de firmware basadas en la web y la doble capacidad de reporte evitan complicaciones en el despliegue y mantenimiento a nivel de flota bajo Plaspy. Para operaciones que requieren un nodo de telemetría compacto y fiable con soporte para sensores BLE, detección de encendido y la capacidad de conmutar relés externos, el Arnavi L2 se presenta como una opción pragmática y lista para la integración.

