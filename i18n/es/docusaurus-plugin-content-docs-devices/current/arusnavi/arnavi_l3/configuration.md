---
slug: /arusnavi/arnavi_l3/configuration
id: arnavi_l3-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi L3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Arusnavi Arnavi L3 y su integración con Plaspy
keywords:
  - Configuración Arusnavi Arnavi L3
  - Configuración Arnavi L3
  - Configuración Arusnavi
  - Configuración Arnavi L3 Plaspy
  - Configuración de rastreadores Plaspy
  - Configuración del rastreador GPS Arusnavi
  - Configuración de rastreo de flotas
  - Configuración de plataforma GPS
  - Configuración del servidor Arnavi L3
  - Configuración de telemetría Arnavi L3
---

# Arusnavi - Configuración Arnavi L3

Esta página documenta el contexto público de configuración para usar el rastreador GPS Arusnavi Arnavi L3 con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos prácticos para apuntar el dispositivo a Plaspy y habilitar el rastreo y la telemetría en tiempo real. Las indicaciones aquí están pensadas para ayudar a instaladores e integradores a preparar el dispositivo para comunicarse con Plaspy usando los ajustes de integración públicos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los ajustes de servidor de Plaspy y luego confirme los pasos específicos del dispositivo con las herramientas de configuración de Arusnavi o la documentación oficial del fabricante.

## Resumen de configuración

Este proceso prepara el Arnavi L3 para enviar posiciones GNSS, telemetría de sensores y alertas basadas en eventos a Plaspy, manteniendo la capacidad de reporte a dos servidores para redundancia. El objetivo es apuntar el dispositivo al endpoint de Plaspy, asegurar la conectividad celular confiable y validar que Plaspy está recibiendo telemetría y eventos.

- Configure el dispositivo para reportar al endpoint y puerto del servidor Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Verifique los datos celulares y la configuración de la SIM para que el Arnavi L3 pueda conectarse a Plaspy mediante 2G GPRS.
- Elija el transporte apropiado (UDP o TCP) si su herramienta de configuración lo solicita.
- Guarde y aplique los ajustes, luego confirme que el dispositivo aparece en Plaspy y envía actualizaciones de posición periódicas.
- Use el reporte a dos servidores si desea mantener un servidor secundario para redundancia mientras transmite a Plaspy.

## Ajustes del servidor de Plaspy

Al configurar el Arnavi L3 para conectarse a Plaspy, utilice los ajustes públicos de servidor que aparecen a continuación. Estos valores son compartidos entre los dispositivos soportados por Plaspy y son necesarios para la conectividad correcta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP (el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Asegúrese de que el Arnavi L3 tenga una conexión de alimentación correcta y esté instalado según la guía de cableado del dispositivo.
- Inserte una tarjeta SIM activa con un plan de datos que soporte 2G GPRS si su región y la disponibilidad de red lo requieren.
- Tenga acceso al método oficial de configuración de Arusnavi para su unidad, como el configurador para PC vía USB Type-C o la herramienta web del proveedor.
- Confirme que el firmware del dispositivo esté actualizado o anote la revisión de firmware para seguir el procedimiento del fabricante correcto.
- Mantenga disponible el arnés de cableado y cualquier sensor BLE o entradas externas para la puesta en marcha y la validación.
- Verifique la señal celular adecuada en el sitio de instalación para garantizar que el dispositivo pueda alcanzar el servidor de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El Arnavi L3 envía posiciones GNSS y telemetría a través de su enlace celular 2G/GPRS a plataformas de monitoreo. Al configurarlo para reportar a Plaspy, enviará actualizaciones de ubicación, valores de sensores y notificaciones de eventos al endpoint y puerto del servidor Plaspy, de modo que vehículos y activos sean visibles en la plataforma.

- El dispositivo reporta posiciones y telemetría al endpoint compartido d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- Telemetría como estado de ignición, lecturas analógicas y datos de sensores BLE se reenvían a Plaspy para paneles y alertas.
- El reporte por eventos (por ejemplo, encendido/apagado de ignición o umbrales de sensores) se transmite y puede activar alertas y flujos de trabajo en Plaspy.
- Se puede usar el reporte a dos servidores para que el Arnavi L3 envíe flujos idénticos a Plaspy y a un servidor secundario como redundancia.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido, por lo que no es necesario seleccionar el protocolo por separado dentro de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Arusnavi para el Arnavi L3 (configurador para PC vía USB Type-C, herramienta web del fabricante o utilidad del proveedor).
2. En los ajustes de servidor del dispositivo ingrese la dirección de Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 como puerto de reporte utilizado por Plaspy.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888.
5. Si su SIM lo requiere, configure el APN y otros parámetros del operador usando la herramienta del fabricante antes de guardar los ajustes.
6. Aplique o guarde la configuración en la herramienta del dispositivo y siga cualquier indicación para confirmar los cambios.
7. Reinicie el dispositivo si el fabricante o la herramienta de configuración lo recomienda para comenzar a reportar a Plaspy.
8. Valide que el dispositivo aparece en Plaspy y que está enviando actualizaciones periódicas de posición y la telemetría esperada.

## Ejemplos de comandos de configuración

El Arnavi L3 admite configuración remota mediante las herramientas oficiales de Arusnavi y un configurador para PC. Los comandos exactos o las cadenas SMS varían según el firmware y la utilidad del fabricante y no se incluyen aquí. Use la utilidad de configuración de Arusnavi o la interfaz documentada del dispositivo para establecer los valores del servidor Plaspy:

- Ingrese el dominio del servidor d.plaspy.com o la IP del servidor 54.85.159.138
- Establezca el puerto de reporte en 8888
- Seleccione UDP o TCP si la herramienta de configuración lo solicita

Para la sintaxis precisa de comandos, cadenas SMS o comandos de consola, consulte el manual de configuración de Arusnavi o el configurador para PC suministrado por el fabricante.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar las pantallas de configuración y los formatos de comando admitidos; siempre verifique la versión de firmware del dispositivo antes de aplicar instrucciones.
- Al elegir el transporte, UDP generalmente ofrece menor sobrecarga mientras que TCP proporciona una conexión más confiable; seleccione el transporte que requiera su instalación o la recomendación del proveedor.
- El reporte a dos servidores es compatible con el Arnavi L3 y puede utilizarse para enviar flujos idénticos a Plaspy y a un endpoint secundario para redundancia.
- Los sensores BLE y las entradas analógicas reportadas por el dispositivo pueden incluirse en la telemetría de Plaspy una vez que el dispositivo esté enviando datos al endpoint de Plaspy.
- Use el configurador para PC o las herramientas oficiales de Arusnavi para evitar errores de formato y asegurarse de que los cambios queden correctamente guardados en la memoria del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Arnavi L3 con Plaspy ofrece una vía de integración práctica para hardware compacto de rastreo de flotas y activos que soporta GNSS multiconstelación, telemetría por sensores BLE y reporte a dos servidores. Apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos permite a las organizaciones consolidar ubicación en vivo, datos de sensores y alertas de eventos en una única vista operativa para monitoreo, ruteo y respuesta a incidentes.

To learn more about Plaspy and how to onboard devices like the Arnavi L3, visit https://www.plaspy.com. For the most current, device-specific configuration steps, firmware notes, and manufacturer guidance verify details on the Arusnavi official website https://www.arusnavi.ru.
