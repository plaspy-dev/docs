---
slug: /yulongda/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: YulongDa - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador GPS YulongDa TK102 con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo YulongDa TK102
  - Protocolo GPS TK102
  - Compatibilidad YulongDa con Plaspy
  - Protocolo de comunicación TK102
  - Protocolo de rastreo TK102
  - Protocolo de rastreador GPS YulongDa
  - Guía de integración TK102
  - Gestión de flotas TK102
  - Rastreo de vehículos TK102
  - Rastreadores compatibles con Plaspy
---

# YulongDa - Protocolo TK102

Esta página explica, a nivel público y práctico, el contexto del protocolo para usar el rastreador GPS YulongDa TK102 con Plaspy. Aquí se aborda cómo se comunica el dispositivo en términos generales, cómo Plaspy recibe los reportes y qué debe revisar al integrar el TK102 en flotas o flujos de trabajo de seguimiento de activos. Los detalles de hardware del TK102 —tamaño compacto, chipset GPS SIRF3, bandas GSM/GPRS compatibles y características de batería— son antecedentes útiles al evaluar el despliegue y el comportamiento de reporte del equipo.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es recomendable confirmar detalles específicos con la documentación del fabricante. Para conectividad, Plaspy acepta reportes en d.plaspy.com y 54.85.159.138 en el puerto 8888 y el equipo puede configurarse para usar UDP o TCP hacia ese endpoint.

## Visión general del protocolo

El protocolo de reporte del TK102 define cómo el rastreador se identifica y transmite ubicación, estado y telemetría a un servidor remoto. Esta sección se mantiene en un nivel práctico para que usted comprenda el papel del protocolo al integrar el TK102 con Plaspy, sin entrar en los detalles internos del firmware.

- El protocolo permite enviar actualizaciones periódicas de ubicación, mensajes por eventos y información básica de estado al servidor.
- Los campos de identificación en el protocolo permiten a Plaspy asociar los reportes entrantes con un registro de dispositivo registrado.
- Normalmente se transmiten tiempo, posición, velocidad y estados básicos de sensores o entradas para que Plaspy pueda transformar los reportes en datos de seguimiento utilizables.
- El protocolo actúa sobre la capa de transporte (TCP o UDP), pero el encuadre y la temporalidad pueden variar según el firmware o la configuración.
- La integración exitosa depende de que el dispositivo envíe datos al endpoint de Plaspy y de que Plaspy reconozca correctamente el formato de mensaje entrante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y utiliza detección automatizada para determinar el protocolo que emplean los dispositivos entrantes. En la mayoría de configuraciones comunes no es necesario seleccionar manualmente un protocolo en Plaspy si el equipo está correctamente configurado para reportar al servidor de Plaspy.

- Plaspy acepta conexiones y datagramas en d.plaspy.com y en 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar UDP o TCP al enviar reportes al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante cuando los equipos están configurados correctamente.
- Usted debe asegurarse de que el IMEI o identificador del dispositivo esté incluido correctamente en los reportes para que Plaspy pueda vincular los datos entrantes con el dispositivo.
- Si un dispositivo no aparece, revise la configuración de reporte del equipo, la selección del transporte y que el dispositivo esté apuntando al endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

Las opciones de transporte y la configuración del endpoint determinan cómo las unidades TK102 entregan sus mensajes de protocolo a Plaspy. El equipo puede configurarse para usar UDP o TCP según el firmware y las preferencias del usuario.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados y utiliza el mismo puerto en toda la plataforma.
- El TK102 puede soportar el envío de datos por UDP o TCP; elija el transporte que coincida con el firmware del dispositivo y el entorno de red.
- Los firewalls y la configuración de APN del operador pueden afectar la conectividad; asegúrese de permitir tráfico saliente hacia el endpoint y puerto de Plaspy.
- El comportamiento del transporte, como reintentos o estado de sesión, depende del firmware del dispositivo y de la pila de red.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre revisiones de firmware del TK102; versiones más nuevas o más antiguas pueden cambiar cómo se codifican ciertos campos o cuándo se envían los reportes.
- Revisión de hardware o variantes regionales del dispositivo pueden introducir diferencias en las funciones soportadas o en el comportamiento de reporte por defecto.
- La elección del transporte importa: confirme si una unidad TK102 específica está configurada para UDP o TCP y apúntela al endpoint de Plaspy.
- Personalizaciones del fabricante o provisión por parte del operador pueden afectar el formato o la cadencia de los reportes.
- Verifique siempre que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy reciba los datos.
- En caso de duda, consulte la documentación oficial de YulongDa para la configuración específica del dispositivo y las notas de las versiones de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TK102 a nivel práctico le ayuda a poner los dispositivos en línea más rápido, resolver problemas y mantener un seguimiento confiable con el tiempo. Saber qué transporte y endpoint utiliza el equipo reduce la incertidumbre y evita errores comunes de configuración.

- Garantiza que el dispositivo apunte al endpoint correcto de Plaspy y use el puerto soportado.
- Facilita el diagnóstico de problemas de conectividad relacionados con APN del operador, firewalls o incompatibilidades de transporte.
- Permite confirmar más fácilmente que el IMEI y otros identificadores se incluyan para que Plaspy vincule los reportes con los dispositivos.
- Ayuda a tomar decisiones sobre intervalos de reporte, compromisos de vida útil de batería y la cadencia de actualizaciones esperada.
- Brinda contexto al coordinar actualizaciones de firmware o al interactuar con el soporte del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el YulongDa TK102 con Plaspy ofrece una integración sencilla para organizaciones que requieren visibilidad de ubicación y telemetría básica para vehículos, activos o seguimiento personal. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación, permitiendo a los equipos concentrarse en el despliegue y en el uso operativo en lugar de la configuración de bajo nivel.

Plaspy acepta reportes de dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos mientras detecta automáticamente el protocolo del rastreador. Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para información de protocolo o firmware específica y actual, verifique los detalles con el fabricante en http://www.yulongdatechnology.com.
