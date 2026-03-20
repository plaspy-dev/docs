---
slug: /gosafe/gat3000/protocol
id: gat3000-protocol
sidebar_label: Protocol
title: Gosafe - GAT3000 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Gosafe GAT3000 con Plaspy para rastreo GPS y telemetría
keywords:
  - Protocolo Gosafe GAT3000
  - Protocolo GPS Gosafe GAT3000
  - Compatibilidad GAT3000 Plaspy
  - Rastreador Gosafe Plaspy
  - Protocolo de comunicación GAT3000
  - Protocolo de rastreo Gosafe
  - Rastreador GPS solar
  - Protocolo de seguimiento de activos
  - Protocolo de gestión de flotas
  - Protocolo rastreador GPS Plaspy
---

# Gosafe - Protocolo GAT3000

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Gosafe GAT3000 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, el papel del protocolo en el envío de ubicación y telemetría a Plaspy y consideraciones prácticas de compatibilidad para su despliegue. La descripción y las notas están pensadas para administradores, integradores y usuarios técnicos que preparan dispositivos para la integración con la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta guía como orientativa y verifique los detalles específicos del dispositivo en la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del GAT3000 regula cómo el rastreador informa posiciones GNSS, telemetría, eventos de sensores y estado del dispositivo a un servidor remoto. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique, envíe actualizaciones de ubicación, reporte eventos del acelerómetro y de manipulación, y exponga lecturas de sensores Bluetooth para uso en la plataforma.

- Transporta reportes de posición GNSS y telemetría del dispositivo para que Plaspy muestre ubicación en tiempo real e historial.
- Transmite datos de eventos como alertas de manipulación, disparos del acelerómetro y estados de E/S para alertas y automatizaciones.
- Permite incluir identificadores de dispositivo y campos de estado para que Plaspy asocie los mensajes con el activo correcto.
- Soporta configuración remota y ajustes OTA que pueden modificar intervalos de reporte y umbrales.
- Lleva telemetría de accesorios, por ejemplo lecturas BLE, cuando está configurado para hacerlo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos entrantes en un único endpoint compartido y detecta automáticamente el protocolo del dispositivo cuando un rastreador correctamente configurado reporta. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha los reportes de dispositivos en el dominio público d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, por lo que la configuración del endpoint es consistente entre modelos.
- La plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a enviar datos al endpoint compartido.
- Identificadores de dispositivo correctos y un reporte consistente al endpoint de Plaspy son los prerrequisitos habituales para la detección automática.
- Si un dispositivo soporta reportes por SMS como transporte alternativo, la ingestión en la plataforma puede depender de gateways SMS separados según la configuración del operador.

## Transporte y contexto de conexión

El GAT3000 puede reportar a través de enlaces celulares y puede configurarse para usar distintos métodos de transporte según la red y la configuración del dispositivo. Los ajustes de transporte incorrectos son una fuente común de problemas de conectividad, así que confirme que la configuración del dispositivo coincida con la ruta de red prevista hacia Plaspy.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 dependiendo de la configuración del rastreador y el soporte de firmware.
- Todos los dispositivos de Plaspy comparten el mismo puerto de reporte, lo que simplifica la configuración de gateways y el aprovisionamiento.
- Cuando está disponible, SMS puede emplearse como canal de reporte alternativo, separado de los transportes TCP o UDP.
- Confirme que el APN del dispositivo, el ruteo de la SIM y las reglas de firewall permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Diferencias en el nivel de firmware pueden cambiar qué campos de telemetría se incluyen y con qué frecuencia se envían los reportes.
- Revisiones de hardware y funciones opcionales como sensores BLE o doble SIM pueden afectar las capacidades y el comportamiento por defecto.
- Algunos despliegues pueden requerir elegir UDP o TCP en el dispositivo según las características del operador o consideraciones de consumo de energía.
- La configuración por aire puede modificar intervalos de reporte o el contenido del payload tras el aprovisionamiento inicial.
- Valide la compatibilidad contra la documentación de Gosafe para la versión de firmware y la revisión de hardware específicas de su GAT3000.
- Para despliegues a gran escala, haga una prueba piloto con un pequeño conjunto de unidades para confirmar el comportamiento antes del despliegue masivo.
- Asegúrese de que los identificadores de dispositivo y los destinos del servidor estén aprovisionados correctamente para permitir la detección automática por parte de Plaspy.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar reportes confiables, una incorporación ágil y una resolución de problemas eficaz al integrar dispositivos con Plaspy. Tener claro cómo el GAT3000 informa ubicación y eventos reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Permite identificar por qué un dispositivo puede no aparecer en la plataforma cuando los reportes se dirigen mal o usan un transporte erróneo.
- Ayuda a ajustar intervalos de reporte y perfiles de energía para equilibrar la duración de la batería con la frecuencia de telemetría requerida.
- Facilita el mapeo de eventos de sensores BLE y E/S en los paneles y reglas de alerta de Plaspy.
- Acelera el análisis de la causa raíz de problemas de conectividad relacionados con APN, ruteo de SIM o limitaciones del operador.
- Permite a los administradores verificar que la configuración remota y las actualizaciones OTA se aplicaron según lo esperado.

## Por qué usar Plaspy con este protocolo

Combinar el Gosafe GAT3000 con Plaspy ofrece una forma práctica de convertir la telemetría de activos alimentados por energía solar en inteligencia útil para flotas y gestión de activos. Plaspy ingiere posiciones GNSS, eventos del acelerómetro, alertas de manipulación y lecturas de sensores BLE para que los equipos puedan monitorear activos, configurar alarmas de geovallas y generar informes sin necesidad de configurar servidores a medida para cada modelo de dispositivo.

Plaspy mantiene la integración simple usando un endpoint compartido en d.plaspy.com (54.85.159.138) en el puerto 8888 y detectando automáticamente el protocolo del rastreador para dispositivos correctamente configurados. Para obtener más información sobre Plaspy y cómo puede gestionar flujos de trabajo de rastreo y telemetría visite https://www.plaspy.com. Verifique siempre los detalles más recientes sobre el protocolo específico del dispositivo, el comportamiento del firmware y la orientación del fabricante en el sitio oficial de Gosafe https://gosafesystem.com/ ya que las implementaciones y las funciones de firmware pueden cambiar con el tiempo.
