---
slug: /topfly/tld2_l/protocol
id: tld2_l-protocol
sidebar_label: Protocol
title: TopFly - TLD2-L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo del rastreador TopFly TLD2-L y su comunicación con Plaspy para rastreo confiable de vehículos
keywords:
  - Protocolo TopFly TLD2-L
  - Protocolo GPS TopFly TLD2-L
  - Protocolo de comunicación TopFly TLD2-L
  - Protocolo de rastreo TopFly TLD2-L
  - Protocolo GPS TopFly Plaspy
  - Compatibilidad TLD2-L con Plaspy
  - Protocolo rastreador OBDII
  - Protocolo rastreo de vehículos TopFly
  - Rastreo de flotas TLD2-L
  - Protocolo de dispositivo Plaspy
---

# TopFly - Protocolo TLD2-L

Esta página describe el contexto público del protocolo para utilizar el rastreador GPS TopFly TLD2-L con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué puntos de conexión y transportes se usan habitualmente, y qué esperar al integrar este rastreador OBDII plug and play en una implementación. Los detalles técnicos aquí son de carácter público y están pensados para la planificación de integraciones y la resolución de problemas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles en el TLD2-L pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, las implementaciones en producción deben confirmar las capacidades y ajustes del firmware con la documentación del fabricante.

## Resumen del protocolo

El protocolo del TLD2-L define cómo el dispositivo reporta posición, telemetría y eventos a un backend como Plaspy. En la práctica, esto significa que el rastreador abre periódicamente una conexión de red hacia un endpoint de Plaspy y transmite fijaciones GNSS, eventos de acelerómetro e ignición, datos de sensores BLE y actualizaciones de estado para que la plataforma pueda mostrar mapas, alertas y análisis.

- Permite la transmisión de ubicación y telemetría de sensores desde el dongle OBDII hasta la plataforma en la nube.
- Transporta notificaciones de eventos como conducción brusca, cambios de ignición, alarmas por desconexión y advertencias de batería.
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el vehículo y la configuración correctos.
- Soporta almacenamiento intermedio y reportes programados para preservar datos durante cortes temporales de red.
- Funciona sobre los transportes soportados por el dispositivo para que Plaspy ingiera datos de forma confiable tanto para monitorización en tiempo real como para análisis históricos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint unificado e identifica el protocolo del rastreador a partir de las características de la sesión y de los datos que envía el dispositivo. En la mayoría de las implementaciones, el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el rastreador está configurado para reportar a la dirección y puerto del servidor Plaspy.

- Plaspy usa un endpoint de servidor compartido para el reporte de dispositivos, por lo que un dispositivo configurado correctamente será detectado automáticamente.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a reportar.
- Los usuarios generalmente apuntan el rastreador al dominio o IP de Plaspy y configuran el transporte; Plaspy gestiona el mapeo de protocolos en el servidor.
- La identificación correcta del dispositivo depende de que el rastreador envíe campos identificadores estándar y telemetría periódica una vez establecida la conexión.
- Si un dispositivo parece no ser detectado, confirme ajustes de reporte como la dirección del servidor, el tipo de transporte y la versión de firmware del dispositivo.

## Contexto de transporte y conexión

Las decisiones de conexión y transporte determinan cómo el TLD2-L llega a Plaspy. El TLD2-L soporta múltiples transportes y usará el que se seleccione en la configuración del dispositivo o el proporcionado por el firmware. Plaspy ofrece un único puerto común para todos los dispositivos compatibles, lo que simplifica la configuración.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888.
- El TLD2-L puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y reduce errores.
- El dispositivo también soporta transportes adicionales comúnmente usados para gestión remota, como MQTT y SMS cuando corresponde.
- Confirme la selección de transporte en la configuración del rastreador para que coincida con el comportamiento deseado en cuanto a latencia, confiabilidad y traversa de firewall.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar los mensajes soportados, los intervalos de reporte y funciones opcionales como el reenvío de sensores BLE o tipos de eventos avanzados.
- Las revisiones de hardware o variantes regionales pueden alterar bandas de radio, el desempeño GNSS o los transportes disponibles; verifique la variante exacta del modelo antes de despliegues masivos.
- Las opciones de configuración y los conjuntos de comandos del lado del fabricante pueden variar según la versión de firmware; consulte a TopFly para comportamiento específico por firmware.
- La selección de transporte influye en la confiabilidad y la latencia; elija TCP para entrega garantizada cuando esté disponible o UDP para menor sobrecarga cuando sea apropiado.
- Plaspy detecta el protocolo automáticamente, pero la detección correcta depende de que el dispositivo se conecte al endpoint de Plaspy y transmita la identificación y telemetría esperadas.
- Valide siempre un dispositivo en un entorno de prueba antes de un despliegue masivo para confirmar que la cadencia de reportes y la generación de eventos coincidan con las necesidades operativas.

## Por qué es importante entender el protocolo

Comprender cómo el TLD2-L se comunica con Plaspy facilita que el despliegue, la configuración y la resolución de problemas sean más rápidos y previsibles. Conocer el contexto de comunicación ayuda a los equipos a ajustar intervalos de reporte, planificar brechas de conectividad y diagnosticar problemas de entrega de eventos.

- Garantiza la dirección del servidor y los ajustes de transporte correctos en el rastreador para que los datos lleguen a Plaspy de forma confiable.
- Ayuda a interpretar el comportamiento del dispositivo, como almacenamiento intermedio, reportes retardados o eventos ausentes durante pérdida de cobertura.
- Facilita la resolución de problemas al acotar si los inconvenientes provienen de la configuración del equipo, del transporte o del manejo en el servidor.
- Permite decisiones informadas sobre consumo de energía, frecuencia de reportes y umbrales de eventos para equilibrar fidelidad de telemetría y duración de batería.
- Reduce el tiempo de despliegue al alinear la configuración del dispositivo con las expectativas de Plaspy en cuanto a identificación y telemetría.

## Por qué usar Plaspy con este protocolo

Usar el TopFly TLD2-L con Plaspy ofrece un camino directo para convertir la telemetría conectada por OBDII en mapas, alertas y análisis de flotas. El factor de forma plug-and-play del TLD2-L, los eventos de acelerómetro, el soporte de sensores BLE y la capacidad FOTA se combinan con la ingestión unificada de Plaspy para entregar información práctica sobre vehículos en programas de flota y gestión de activos.

Si desea saber más sobre cómo Plaspy maneja integraciones de dispositivos y las capacidades de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente sobre el protocolo y el firmware específico del dispositivo en el sitio del fabricante https://www.topflytech.com/.
