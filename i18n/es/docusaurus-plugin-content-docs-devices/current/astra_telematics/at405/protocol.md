---
slug: /astra_telematics/at405/protocol
id: at405-protocol
sidebar_label: Protocol
title: Astra Telematics - AT405 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Astra Telematics AT405 y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - Protocolo Astra Telematics AT405
  - Protocolo GPS Astra Telematics AT405
  - Compatibilidad AT405 Plaspy
  - Protocolo de comunicación AT405
  - Protocolo del rastreador AT405
  - Rastreador GPS Astra Telematics
  - Dispositivos compatibles Plaspy
  - Seguimiento vehicular AT405
  - Protocolo de telemetría AT405
  - Gestión de flotas AT405
---

# Astra Telematics - Protocolo AT405

Esta página ofrece un contexto público sobre el protocolo para usar el rastreador Astra Telematics AT405 con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy en términos generales, qué comportamiento de reporte puede esperarse del equipo y qué ajustes de transporte verificar al integrar unidades AT405 en una implementación de Plaspy. El AT405 es una unidad compacta con clasificación IP65, conectividad LTE Cat 1, GNSS multi constelación, BLE para sensores de corto alcance y entradas y salidas de vehículo como CANBus y E/S digitales.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los dispositivos compatibles con Plaspy normalmente apuntan al endpoint de Plaspy y usan el mismo puerto configurado, aunque el comportamiento exacto del protocolo puede variar según la revisión de firmware, la revisión de hardware y la implementación del fabricante. Al preparar un AT405 para su integración con Plaspy, confirme la versión de firmware y la configuración de transporte consultando la documentación del fabricante y su proceso de aprovisionamiento.

## Visión general del protocolo

El protocolo de reporte del AT405 es el mecanismo mediante el cual el rastreador entrega posiciones GNSS, telemetría del vehículo y datos de eventos a Plaspy para que la plataforma pueda mostrar mapas, alertas e informes. La descripción pública aquí se enfoca en el rol del protocolo de comunicación más que en formatos de paquetes internos o tramas de comando propietarias.

- Permite que el rastreador envíe actualizaciones de ubicación y telemetría con marca de tiempo desde GNSS y las interfaces del vehículo a Plaspy.
- Transporta identificación y estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Transmite mensajes impulsados por eventos como cambios de ignición, eventos de geovalla o activaciones del inmovilizador para monitorización en tiempo real.
- Soporta reportes periódicos y bajo demanda para que la plataforma proporcione servicios de ubicación en vivo e histórico.
- Permite incluir campos de telemetría opcionales, como parámetros CANBus e entradas de sensores BLE, en los reportes regulares.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir reportes de muchos modelos de rastreadores sin requerir selección manual de protocolo en la mayoría de las implementaciones. Cuando un AT405 apunta al endpoint de Plaspy con los ajustes de transporte correctos, la plataforma identificará y decodificará los datos entrantes conforme a los perfiles de protocolo soportados.

- Plaspy recibe tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy escucha en el puerto 8888 para conexiones de rastreadores.
- El AT405 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el aprovisionamiento.
- Cuando un AT405 reporta al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador para las unidades compatibles.
- En la mayoría de los casos, usted no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

Conectar un AT405 a Plaspy requiere configurar el dispositivo para que reporte al endpoint de Plaspy usando el transporte soportado. El AT405 soporta transportes celulares comunes y puede configurarse para entregar telemetría a Plaspy por la ruta de red más adecuada para su implementación.

- El AT405 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la versión de firmware y las opciones de aprovisionamiento del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando DNS o restricciones de red requieren una dirección fija.
- El puerto 8888 es el puerto compartido de Plaspy usado por todos los dispositivos soportados para la ingestión de telemetría.
- Ajustes de la red celular como APN, políticas de roaming y disponibilidad de señal afectan si el dispositivo puede mantener una conexión fiable.
- Verifique que sus políticas de red y firewall permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan y cómo se codifican ciertos eventos. Confirme el nivel de firmware para expectativas de funciones.
- Las revisiones de hardware u opciones de configuración de E/S en el AT405 pueden afectar el acceso a diagnósticos disponibles y la exposición de mensajes CANBus.
- Algunas opciones de configuración del fabricante pueden cambiar el dispositivo entre modos de reporte UDP y TCP; elija el transporte que coincida con sus necesidades operativas.
- La fiabilidad del transporte difiere según la red y el entorno, por lo que conviene probar tanto UDP como TCP cuando sea práctico durante el despliegue.
- Plaspy soporta detección automática de protocolo, pero validar un dispositivo de prueba temprano en el despliegue ayuda a confirmar el mapeo de datos esperado.
- Siempre consulte la documentación de Astra Telematics y las notas de versión para cambios de comportamiento específicos del dispositivo.

## Por qué es importante entender el protocolo

Saber cómo se comunica el AT405 con Plaspy ayuda a asegurar instalaciones confiables, acelerar la resolución de problemas y obtener datos predecibles en sus paneles de gestión de flota. El conocimiento del protocolo reduce la incertidumbre cuando los dispositivos se comportan de manera distinta a lo esperado y ayuda a los equipos de operaciones a alinear la configuración de los equipos con las expectativas de la plataforma.

- Ayuda a asegurar que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el transporte y puerto correctos.
- Acelera la resolución de problemas al reducir el ámbito a transporte, versión de firmware o ajustes del dispositivo cuando faltan reportes o están incompletos.
- Permite expectativas sensatas sobre qué tipos de telemetría y eventos estarán disponibles del AT405 en Plaspy.
- Informa decisiones sobre intervalos de reporte y ajustes de administración de energía para equilibrar la duración de batería y la granularidad de datos.
- Facilita la validación de integraciones CANBus y sensores BLE para que la plataforma reciba la telemetría necesaria para reglas y alertas.

## Por qué usar Plaspy con este protocolo

Usar el AT405 con Plaspy ofrece una forma práctica de recopilar posiciones GNSS, telemetría del vehículo y datos de sensores de corto alcance para operaciones de flota, flujos de trabajo contra robos y servicios de movilidad compartida. Las características de hardware del AT405, como conectividad LTE Cat 1, acceso a CANBus y BLE, complementan las capacidades de Plaspy para monitorización en tiempo real y análisis histórico sin requerir trabajo de firmware personalizado para flujos de telemetría estándar.

Si evalúa el AT405 para una implementación con Plaspy, comience con un piloto pequeño para confirmar la combinación de transporte y firmware que planea usar. Para saber más sobre Plaspy y cómo soporta una amplia gama de rastreadores, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de instalación más recientes, verifique la información en el sitio del fabricante https://astratelematics.com/.
