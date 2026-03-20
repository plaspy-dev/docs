---
slug: /teltonika/tmt250/protocol
id: tmt250-protocol
sidebar_label: Protocol
title: Teltonika - TMT250 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Teltonika TMT250 y su comunicación con Plaspy para seguimiento y alertas
keywords:
  - Protocolo Teltonika TMT250
  - Protocolo GPS Teltonika TMT250
  - Compatibilidad TMT250 Plaspy
  - Comunicación rastreador Teltonika
  - Guía protocolo rastreador GPS
  - Integración TMT250 Bluetooth LE
  - Rastreador GPS seguridad personal
  - Compatibilidad dispositivos Plaspy
  - Resumen protocolo de rastreo
  - Protocolo seguimiento de activos
---

# Teltonika - Protocolo TMT250

Esta página describe, en términos públicos y operativos, el contexto del protocolo para usar el Teltonika TMT250 con Plaspy. El TMT250 es un rastreador GPS mini autónomo 2G diseñado para seguridad personal, con funcionalidades como botón de emergencia, conectividad Bluetooth LE para balizas y sensores externos, detección de caída y varios modos de suspensión. La información aquí se centra en cómo el dispositivo se comunica con Plaspy para facilitar la configuración e integración sin entrar en detalles sensibles.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Los datos públicos de conexión de Plaspy son: dominio de servidor d.plaspy.com, IP de servidor 54.85.159.138 y puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto.

## Resumen del protocolo

El protocolo es el mecanismo mediante el cual el TMT250 informa ubicación, estado, eventos y datos de sensores a un servidor remoto como Plaspy. A grandes rasgos, el rastreador utiliza su pila de radio y red para establecer conectividad, identificarse y transmitir la información necesaria para monitoreo y alertas. El protocolo integra soluciones GNSS, transporte celular, entradas de sensores BLE y disparadores de eventos como el botón de emergencia o detección de caída.

- Permite la identificación del dispositivo y el establecimiento de sesión para que Plaspy asocie los mensajes entrantes al rastreador correcto.
- Transmite posición GNSS, marca de tiempo y eventos relacionados con movimiento que Plaspy emplea en la visualización y geocercas.
- Envía alarmas y eventos de emergencia como presión de botón, caída y ausencia de movimiento.
- Soporta datos de sensores auxiliares y balizas BLE que el dispositivo puede incluir en sus reportes a Plaspy.
- Funciona sobre transportes de red estándar para que Plaspy reciba datos de manera confiable y genere notificaciones a los usuarios.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint público y puerto e inspecciona los datos para determinar qué protocolo de rastreador se está utilizando. Esta detección automática simplifica la configuración para la mayoría de los usuarios: si el TMT250 apunta al endpoint de Plaspy y utiliza un transporte compatible, Plaspy identificará el dispositivo y empezará a procesar sus reportes.

- Plaspy escucha en d.plaspy.com y 54.85.159.138 usando el puerto 8888 para reportes de dispositivos.
- La plataforma acepta conexiones UDP y TCP en el puerto 8888, por lo que el dispositivo puede usar cualquiera de los dos transportes.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, por lo general usted no necesita seleccionar un protocolo específico dentro de Plaspy.
- La detección automática reduce pasos de configuración, pero depende de que el dispositivo envíe datos de identificación y eventos reconocibles.
- Si un dispositivo no se detecta automáticamente, el primer paso de solución de problemas es verificar la configuración del equipo y la accesibilidad de la red hacia d.plaspy.com o 54.85.159.138.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el rastreador alcanza Plaspy y qué opciones de red se utilizan comúnmente. El TMT250 soporta GPRS celular para transferencia de datos y puede configurarse para reportar a Plaspy mediante UDP o TCP. Al configurar el dispositivo, apunte su destino de reportes al endpoint de Plaspy para que los mensajes lleguen al único puerto soportado.

- Los dispositivos pueden configurarse para enviar datos al dominio d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy recibe datos en el puerto 8888 y acepta tanto UDP como TCP en ese puerto.
- Las funciones BLE del TMT250 (sensores y balizas) normalmente reportan localmente al dispositivo y luego se reenvían a Plaspy como parte de los reportes de red.
- La conectividad celular y el comportamiento del operador de red afectan la estabilidad del transporte y deben considerarse al desplegar la solución.
- Verifique la configuración de APN y la SIM en el dispositivo para que pueda alcanzar el endpoint de Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- El TMT250 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, pero el comportamiento puede variar según las revisiones de firmware.
- El reporte de sensores Bluetooth LE se gestiona localmente en el dispositivo y luego se incluye en los reportes de red; diferencias en el firmware BLE pueden afectar qué tipos de sensor se reenvían.
- Revisiones de hardware y variantes de módulos pueden introducir pequeñas diferencias en el protocolo o en las funciones; verifique la configuración del dispositivo después de actualizaciones de firmware.
- La elección del transporte entre UDP y TCP puede cambiar características de entrega como retransmisiones y orden de los paquetes.
- Los métodos de configuración como USB, Bluetooth o FOTA pueden alterar el comportamiento del dispositivo; confirme los ajustes luego de configurarlo o tras una actualización.
- Siempre valide funciones críticas, como el manejo del botón de emergencia y los eventos de caída, en un entorno controlado antes de su uso en producción.
- Consulte la documentación oficial de Teltonika para notas específicas de firmware y registros de cambios.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar una configuración correcta, una resolución de problemas más rápida y un comportamiento consistente a lo largo del tiempo. Para dispositivos como el TMT250 que brindan alertas de seguridad e integración de sensores, saber cómo y cuándo se transmiten los datos a Plaspy mejora la confiabilidad y la confianza operativa.

- Ayuda a verificar que el dispositivo apunte al endpoint correcto de Plaspy y utilice el puerto 8888 con el transporte deseado.
- Permite una solución de problemas más dirigida cuando eventos como alertas de emergencia o reportes de sensores no aparecen en Plaspy.
- Informa decisiones sobre intervalos de reporte y modos de suspensión para equilibrar la vida útil de la batería y la capacidad de respuesta.
- Aclara cómo los datos de sensores BLE y los eventos locales se representan en los reportes de la plataforma.
- Facilita la validación después de actualizaciones de firmware o cambios de configuración para confirmar el comportamiento esperado.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika TMT250 con Plaspy ofrece a organizaciones y personas una forma directa de recibir actualizaciones de ubicación, alertas de emergencia y datos de sensores en una sola plataforma. La detección automática de protocolos de Plaspy y la gestión unificada de puertos reducen la carga de configuración, permitiendo que usted se enfoque en la colocación del dispositivo, las políticas de eventos y las reglas de notificación en lugar de los detalles de bajo nivel del transporte.

Para saber más sobre Plaspy y cómo puede trabajar con dispositivos como el TMT250 visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos del dispositivo, notas de firmware e instrucciones de configuración, consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar el comportamiento según su versión de firmware y revisión de hardware.
