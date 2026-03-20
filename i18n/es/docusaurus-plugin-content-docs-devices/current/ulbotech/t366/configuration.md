---
slug: /ulbotech/t366/configuration
id: t366-configuration
sidebar_label: Configuration
title: Ulbotech - T366 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar Ulbotech T366 en Plaspy y habilitar rastreo y telemetría vehicular en tiempo real
keywords:
  - Configuración Ulbotech T366
  - Instalación Ulbotech T366
  - Ulbotech T366 Plaspy
  - Configuración servidor T366
  - Configuración rastreador GPS T366
  - Configuración rastreador Plaspy
  - Configuración OBD GPS
  - Rastreo vehicular T366
  - Configuración telemetría T366
  - Rastreo de flotas Plaspy
---

# Ulbotech - T366 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador OBD GPS Ulbotech T366 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy que deberá usar al dirigir el T366 para reportar posición y telemetría, y resume pasos prácticos que puede seguir con las herramientas de configuración de Ulbotech o el software del proveedor. El contenido está enfocado en la información necesaria para conectar el dispositivo a Plaspy y validar el envío de datos en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione su proveedor. Use esta guía para aplicar el endpoint público y el puerto de Plaspy al T366, y luego confirme el comportamiento del dispositivo con las instrucciones de su instalador y la documentación de Ulbotech.

## Resumen de la configuración

El objetivo al configurar el T366 para Plaspy es apuntar el dispositivo al endpoint de ingestión de Plaspy, elegir el transporte apropiado y verificar que las posiciones GNSS y la telemetría OBD/CAN lleguen a la plataforma. Con el T366, que cambia automáticamente entre Wi‑Fi y GPRS y se conecta por OBD, la configuración se centra en los ajustes de endpoint de red, la selección del transporte y una verificación final en Plaspy.

- Apunte el endpoint del dispositivo a Plaspy para que el rastreador entregue GNSS y telemetría OBD.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Asegúrese de la conectividad de red (SIM y datos móviles o Wi‑Fi) y de que los ajustes APN sean correctos para reportes por GPRS.
- Aplique y guarde la configuración en la herramienta de Ulbotech o en el flujo SMS/software del proveedor y reinicie el rastreador si es necesario.
- Valide actualizaciones en tiempo real y el reporte de eventos en Plaspy para confirmar que el dispositivo está visible y reportando correctamente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el T366. Estos son los valores que Plaspy requiere para ingerir telemetría desde rastreadores compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Siempre ingrese ya sea el dominio del servidor o la IP tal como se indica arriba y configure el dispositivo para usar el puerto 8888. Si su herramienta de configuración solicita transporte, seleccione UDP o TCP según la capacidad del equipo; Plaspy identificará el protocolo del dispositivo automáticamente cuando lleguen los primeros paquetes.

## Requisitos típicos antes de la configuración

- Acceso al método de configuración de Ulbotech que le haya proporcionado el proveedor, como el software del fabricante, la herramienta web o las instrucciones SMS de configuración.
- Un T366 alimentado y conectado al puerto OBD‑II del vehículo o a una fuente de banco que cumpla el rango de entrada del dispositivo.
- Una tarjeta SIM activa con datos habilitados si piensa utilizar reportes por GPRS, o una red Wi‑Fi conocida para reportes por Wi‑Fi.
- Conocimiento de los ajustes APN del operador móvil si la detección automática del APN no aplica o requiere ingreso manual.
- Acceso físico al dispositivo para conexión micro USB o para observar los LEDs de estado durante la configuración y el reinicio.
- Confirmación de la versión de firmware del equipo y de cualquier nota del proveedor de firmware que afecte el comportamiento de red o las opciones de configuración disponibles.

## Cómo se conecta este rastreador a Plaspy

El T366 envía posiciones GNSS, telemetría OBD y CAN, y alertas de eventos a Plaspy usando el transporte de red configurado. Al apuntar al endpoint y puerto compartidos de Plaspy, los flujos de datos del dispositivo son ingeridos y mostrados como actualizaciones en tiempo real y registros históricos en la plataforma.

- El rastreador reporta ubicación y telemetría al endpoint de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la capacidad del dispositivo y la selección de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes al perfil de dispositivo configurado.
- Los eventos del T366 como actividad del inmovilizador, alertas de comportamiento de conducción y pérdida de energía se reenvían a Plaspy para alertas e informes.
- El T366 puede usar Wi‑Fi o GPRS como ruta de red; la lógica del dispositivo puede alternar entre ellas para mantener el reporte continuo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Ulbotech o al software del proveedor para el T366 (herramienta del fabricante, procedimiento de SMS de configuración o utilidad USB).
2. En los ajustes de servidor o centro, ingrese d.plaspy.com o 54.85.159.138 como endpoint de reporte.
3. Configure el puerto de reporte en 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su plan de red.
5. Configure el APN y las credenciales de red si usa GPRS, o verifique las credenciales Wi‑Fi si usa reportes por Wi‑Fi.
6. Aplique o guarde la configuración y, si la herramienta lo requiere, reinicie el equipo para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando actualizaciones de posición en vivo y telemetría en la plataforma.

## Ejemplos de comandos de configuración

Los comandos y métodos de configuración del fabricante para el T366 varían según el firmware y las herramientas del proveedor. Dado que esta página contiene solo el contexto público de configuración y el modelConfiguration está vacío, no se proporcionan comandos exactos aquí. Las formas típicas de configurar el dispositivo incluyen:

- Usar la utilidad de configuración de Ulbotech o del proveedor para escritorio a través de micro USB.
- Enviar las cadenas SMS oficiales de configuración cuando el firmware del dispositivo soporte configuración por SMS.
- Configurar ajustes mediante un portal web o en la nube suministrado por su proveedor.

Consulte la guía de configuración de Ulbotech que se entrega con su equipo o pida a su proveedor las cadenas SMS exactas o los pasos de configuración USB para establecer el servidor en d.plaspy.com (o 54.85.159.138) y el puerto 8888. Preserve cualquier marcador de posición que le proporcione el proveedor, por ejemplo [apn] para valores del APN del operador, y reemplácelo con sus datos de red.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos disponibles y la disposición de los menús; siempre verifique la versión de firmware del dispositivo antes de aplicar los pasos.
- Muchos instaladores prefieren USB o una herramienta del proveedor para configuraciones masivas; la configuración por SMS es común para cambios en campo pero puede estar limitada por el firmware.
- Elija UDP cuando necesite menor sobrecarga de transporte y menor latencia, o TCP cuando prefiera fiabilidad de sesión; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Confirme APN, nombre de usuario y contraseña con su operador de SIM si la detección automática del APN no funciona.
- Mantenga un registro del IMEI del dispositivo y de identificadores únicos para emparejar el equipo que reporta en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el Ulbotech T366 para reportar a Plaspy ofrece a operadores y gerentes de flota una vía directa para ingerir posiciones GNSS precisas y telemetría OBD/CAN detallada en una única plataforma. La comodidad del T366 al conectarse por OBD, combinada con el cambio automático entre Wi‑Fi y GPRS y el soporte para controles de inmovilizador, lo hacen una opción práctica para despliegues que requieren rastreo continuo e inteligencia vehicular.

Para obtener más información sobre Plaspy y cómo puede recibir datos de dispositivos como el T366, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y detalles del fabricante consulte el sitio oficial de Ulbotech en http://www.ulbotech.com/ para verificar las instrucciones y herramientas actuales.
