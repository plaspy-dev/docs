---
slug: /gotop/vt_330/configuration
id: vt_330-configuration
sidebar_label: Configuration
title: GOTOP - VT-330 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP VT-330 con Plaspy, incluyendo ajustes de servidor y pasos prácticos para seguimiento en tiempo real
keywords:
  - Configuración GOTOP VT-330
  - Instalación GOTOP VT-330
  - VT-330 Plaspy
  - Configuración servidor VT-330
  - Configuración rastreador GPS GOTOP
  - Configuración doble SIM GOTOP VT-330
  - Configuración rastreador vehicular
  - Configuración seguimiento de flotas
  - Integración rastreador GPS Plaspy
  - Guía GOTOP VT-330
---

# GOTOP - VT-330 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS GOTOP VT-330 con Plaspy. Resume los ajustes compartidos del servidor Plaspy que usted deberá aplicar, explica los pasos prácticos que suelen seguir los instaladores y destaca las funciones del VT-330 relevantes para la integración con Plaspy, como la conectividad GSM GPRS con doble SIM, el reporte de entrada SOS, telemetría básica y la batería de respaldo integrada.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y la herramienta de configuración del proveedor. Use esta guía como referencia práctica para los valores comunes de servidor y el flujo de trabajo; verifique los comandos o menús específicos del fabricante en la documentación oficial de GOTOP cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es preparar el VT-330 para que se comunique de forma fiable con Plaspy y pueda enviar posiciones, eventos y telemetría básica para monitoreo e informes. La configuración consiste principalmente en apuntar el dispositivo al servidor Plaspy, confirmar los parámetros de transporte y validar que la unidad aparece correctamente en la plataforma.

- Configure el dispositivo para que reporte al endpoint del servidor Plaspy usando los detalles compartidos d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Seleccione UDP o TCP en el VT-330 si el dispositivo pide elegir el transporte; Plaspy admite ambos.
- Confirme la configuración de doble SIM y de GSM GPRS para que el VT-330 mantenga conectividad de datos con Plaspy para seguimiento en vivo y alertas SOS.
- Guarde y aplique los cambios en la herramienta de configuración del fabricante o mediante SMS/consola del dispositivo, y luego valide que la unidad esté reportando a Plaspy.
- Use Plaspy para comprobar visibilidad, actualizaciones de ubicación en tiempo real y mensajes de evento recibidos como SOS o cambios en el estado de entradas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usa el mismo puerto para todos los dispositivos compatibles

## Requisitos previos a la instalación

- Una unidad VT-330 alimentada con recepción GNSS funcional y batería de respaldo cargada si aplica
- Tarjeta(s) SIM activa(s) con plan de datos insertas en las ranuras doble SIM del VT-330 y cobertura de red móvil para GPRS
- Acceso al método o software de configuración del fabricante GOTOP para el VT-330, como una herramienta de PC, interfaz web o comandos SMS documentados
- El IMEI del dispositivo y cualquier dato de cuenta necesario para registrar o identificar la unidad en Plaspy
- Una cuenta en Plaspy con permisos para agregar o ver dispositivos, para que usted pueda validar el rastreador después de configurarlo
- Acceso básico al cableado del vehículo si conectará SOS, entradas, salidas o el relé inmovilizador durante la instalación

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el VT-330 usa GSM GPRS para enviar posiciones GNSS y mensajes de evento al endpoint y puerto del servidor Plaspy. Plaspy recibe estas actualizaciones y las presenta para monitoreo en tiempo real, alertas y reproducción histórica.

- El VT-330 envía datos de posición y movimiento por GSM GPRS a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- Mensajes de eventos como pulsaciones del botón SOS y cambios de estado en entradas digitales se reenvían a Plaspy para alertas y respuesta operativa
- La capacidad de doble SIM ayuda a mantener conectividad continua permitiendo que el equipo cambie entre operadoras cuando esté disponible
- Plaspy procesa los paquetes entrantes y detecta automáticamente el protocolo del rastreador, de modo que el dispositivo se reconoce sin necesidad de cambiar puertos por unidad
- Las salidas y el relé inmovilizador suministrado pueden integrarse en flujos de trabajo de Plaspy cuando el cableado y los permisos de plataforma estén configurados

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del GOTOP VT-330 según el manual del equipo o las herramientas del proveedor.
2. Inserte y active la(s) tarjeta(s) SIM con un plan de datos funcional y confirme el registro en la red desde el rastreador.
3. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del dispositivo en 8888 en la configuración del servidor.
5. Seleccione UDP o TCP si el VT-330 solicita elegir el transporte para el reporte.
6. Aplique o guarde la configuración en la herramienta del dispositivo y reinicie el VT-330 si el fabricante o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo, una actualización de ubicación recibida o un evento de prueba en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VT-330 puede configurarse usando el software suministrado por el fabricante, una consola serial o comandos SMS según el firmware y las herramientas regionales. La sintaxis exacta de los comandos y los métodos soportados varían según el firmware de GOTOP y el canal de distribución, por lo que consulte el manual oficial de GOTOP para la lista definitiva de comandos.

Si cuenta con comandos SMS o de consola proporcionados por el proveedor para establecer dominio de servidor, IP y puerto, utilice esos comandos exactamente como los entregue el fabricante. Los ejemplos públicos típicos que facilitan los proveedores toman la forma de establecer servidor, puerto y parámetros APN, pero el formato preciso del texto difiere según la versión de firmware. Siempre use la documentación oficial o la herramienta de configuración de GOTOP para comandos precisos.

## Notas de configuración

- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita cambios de puerto por dispositivo para compatibilidad.
- TCP y UDP son soportados por Plaspy; elija el transporte que coincida con sus necesidades de instalación o con las recomendaciones del firmware del rastreador.
- El comportamiento de doble SIM puede variar según el firmware del proveedor; verifique cómo el VT-330 intercambia SIMs y que los ajustes APN sean correctos para cada operador cuando use configuraciones multi SIM.
- Las revisiones de firmware y las variantes de hardware pueden cambiar menús de configuración y la sintaxis de comandos; siempre revise el manual del GOTOP VT-330 para la versión específica de su dispositivo.
- Si utiliza configuración por SMS, sea preciso con la sintaxis de los comandos y tenga en cuenta cualquier contraseña administrativa por defecto documentada por GOTOP.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-330 con Plaspy ofrece a las organizaciones una forma práctica de recopilar posiciones GNSS continuas, telemetría básica del vehículo y alertas de eventos como SOS y cambios en entradas digitales. La resiliencia de la doble SIM del VT-330 y su factor de forma compacto lo hacen apropiado para flotas mixtas, motocicletas y vehículos eléctricos pequeños, mientras que Plaspy proporciona la visibilidad centralizada y los informes necesarios para la supervisión operativa.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y los detalles de configuración más recientes del VT-330, consulte la documentación del fabricante GOTOP en https://www.gotop.cc/ que puede incluir instrucciones y herramientas actualizadas para su versión del equipo.
