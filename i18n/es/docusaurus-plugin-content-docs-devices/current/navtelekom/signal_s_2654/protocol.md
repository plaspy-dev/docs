---
slug: /navtelekom/signal_s_2654/protocol
id: signal_s_2654-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2654 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Navtelekom СИГНАЛ S-2654 con el seguimiento en tiempo real de Plaspy
keywords:
  - Protocolo Navtelekom СИГНАЛ S-2654
  - Protocolo GPS Navtelekom S-2654
  - Compatibilidad SIGNAL S-2654 Plaspy
  - Protocolo rastreador S-2654 GLONASS
  - Protocolo de rastreo Navtelekom
  - Protocolo de comunicación de rastreadores vehiculares
  - Compatibilidad telemática de flotas Plaspy
  - Integración de telemetría S-2654
  - Protocolo Navtelekom MODBUS CAN RS485
  - Documentación rastreador Navtelekom descontinuado
---

# Navtelekom - Protocolo СИГНАЛ S-2654

Esta página describe el contexto público del protocolo para usar el rastreador vehicular Navtelekom СИГНАЛ S-2654 con Plaspy. Se centra en cómo el equipo se comunica con la plataforma Plaspy en términos no sensibles y neutrales respecto a la implementación, para que integradores y operadores de flotas entiendan las expectativas de conexión y consideraciones prácticas de despliegue.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta correctamente. El dominio del servidor Plaspy es d.plaspy.com y la IP es 54.85.159.138. El puerto es 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo utilizado por el S-2654 transmite reportes de posición GNSS, telemetría celular y estados digitales o serie hacia una plataforma remota. Para Plaspy, el protocolo permite al rastreador identificarse, enviar ubicación y datos de sensores, y que el servidor relacione esos mensajes con el registro correcto del activo.

- Transporta posiciones GNSS y telemetría con sello temporal desde el equipo hacia un servidor remoto para seguimiento en tiempo real.
- Transmite información de estado como encendido, entradas, salidas y eventos de alarma que se mapearán a alertas y reglas en Plaspy.
- Codifica telemetría derivada de CAN y puertos seriales para que datos de combustible, motor o sensores puedan ser procesados por la plataforma.
- Permite al servidor asociar los mensajes con la identidad del dispositivo para que los reportes, el historial y las reconstrucciones funcionen correctamente.
- Funciona junto con el registro local en microSD para asegurar que los datos puedan reconciliarse tras pérdidas temporales de conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy determina automáticamente el protocolo correcto del rastreador cuando un dispositivo está configurado para enviar datos al endpoint de Plaspy. En la mayoría de los casos no se requiere seleccionar manualmente el protocolo dentro de Plaspy si el S-2654 apunta a la plataforma y utiliza un transporte compatible.

- Plaspy acepta conexiones de dispositivos en el endpoint compartido d.plaspy.com y en el endpoint numérico 54.85.159.138.
- La plataforma escucha en el puerto 8888 el tráfico entrante de dispositivos y usa un puerto consistente para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe reportes válidos desde el dispositivo.
- Los usuarios normalmente configuran el S-2654 para reportar a d.plaspy.com o a 54.85.159.138 y para usar UDP o TCP en el puerto 8888.
- Cuando un dispositivo usa los ajustes de conexión esperados, Plaspy empata la identidad del dispositivo con los registros de la cuenta y comienza a ingerir ubicación y telemetría.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el S-2654 alcanza el servicio Plaspy y qué opciones de red son comunes. Estos detalles son útiles para reglas de firewall, configuración de APN y puesta a punto del dispositivo a nivel de despliegue.

- El S-2654 puede configurarse para enviar datos por UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para sistemas que prefieren un endpoint numérico.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el reporte de dispositivos.
- La operación con doble SIM en el S-2654 ayuda a mantener un enlace activo hacia Plaspy en áreas con cobertura celular variable.
- Configure el APN del dispositivo y los puertos salientes permitidos para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138 por el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto exacto de mensajes y campos que envía un dispositivo; verifique el nivel de firmware al validar compatibilidad.
- Las revisiones de hardware u opciones accesorios como módulos CAN o serial pueden afectar qué flujos de telemetría están disponibles para Plaspy.
- El S-2654 figura como modelo archivado o descontinuado por el fabricante; los modelos archivados pueden seguir siendo compatibles pero requieren revisar la documentación y el historial de firmware disponibles.
- La elección del transporte importa: algunos dispositivos prefieren UDP mientras otros pueden usar TCP; confirme que el S-2654 esté configurado para usar UDP o TCP en el puerto 8888 según sea necesario.
- Las herramientas de configuración del fabricante, como NTC Configurator, y la gestión remota vía DRC facilitan asegurarse de que el dispositivo apunte correctamente al endpoint de Plaspy.
- Siempre valide la identidad del dispositivo y los mensajes iniciales después de la primera conexión para asegurarse de que Plaspy detecte el protocolo y comience a ingerir datos.

## Por qué es importante comprender el protocolo

Comprender cómo el rastreador se comunica con Plaspy facilita una configuración más ágil, una resolución de problemas más rápida y una operación a largo plazo más confiable. Tener expectativas claras sobre el protocolo reduce el tiempo de integración y simplifica el mantenimiento de la visibilidad de la flota.

- Asegura la correcta configuración de APN, SIM y puertos salientes para que el dispositivo alcance d.plaspy.com o 54.85.159.138.
- Ayuda a diagnosticar problemas de conectividad confirmando si el dispositivo usa UDP o TCP en el puerto 8888.
- Orienta en la selección de firmware y la configuración cuando distintas versiones cambian el contenido de los mensajes o la telemetría soportada.
- Apoya la planificación del mapeo de telemetría para que entradas, datos CAN y valores MODBUS sean interpretados por Plaspy según lo esperado.
- Facilita los flujos de reconciliación que combinan los registros locales en microSD con el historial en servidor cuando la cobertura es intermitente.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СИГНАЛ S-2654 con Plaspy ofrece una vía práctica para recolectar fixes GLONASS, entradas del vehículo y telemetría industrial en un único flujo de trabajo de gestión de flotas. El hardware del dispositivo y sus opciones de E/S lo hacen adecuado para flotas que necesitan redundancia celular confiable, integración serial y CAN, y registro local que complemente el rastreo basado en servidor.

Para saber más sobre Plaspy y cómo ingiere datos de dispositivos como el S-2654 visite https://www.plaspy.com. Para la documentación más reciente específica del dispositivo, notas de firmware y herramientas de configuración consulte al fabricante en https://www.navtelecom.ru/. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que conviene verificar la información vigente en la documentación del fabricante.
