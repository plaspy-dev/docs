---
slug: /teltonika/fmm250/configuration
id: fmm250-configuration
sidebar_label: Configuration
title: Teltonika - FMM250 Configuration
sidebar_class_name: menu_item_tracker
description: Configura el Teltonika FMM250 para Plaspy con ajustes de servidor y comandos de ejemplo para una puesta en marcha rápida
keywords:
  - Configuración Teltonika FMM250
  - Ajuste Teltonika FMM250
  - Configuración FMM250 Plaspy
  - Configuración servidor FMM250
  - Configuración rastreador GPS Teltonika
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS vehicular
  - Configuración rastreador de flota
  - Configuración telemetría CAN Teltonika
  - Configuración servidor rastreador GPS
---

# Teltonika - Configuración FMM250

Esta página describe el contexto público de configuración para usar el Teltonika FMM250 con Plaspy. Se centra en los ajustes de servidor y en los pasos prácticos necesarios para apuntar un rastreador FMM250 a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría CAN a la plataforma. Use esta información junto con la documentación oficial de Teltonika y las herramientas de configuración del dispositivo que tenga disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración o comandos SMS de Teltonika que decida usar. Donde esté disponible, esta página incluye un comando setparam de ejemplo que ilustra un enfoque público común para dispositivos Teltonika.

## Resumen de configuración

Preparar el FMM250 para integrarlo con Plaspy implica configurar el acceso de red, establecer el endpoint y el puerto del servidor Plaspy, y validar que la plataforma reciba correctamente la telemetría y los datos CAN. El comando de ejemplo que sigue muestra una forma compacta de establecer el APN y los campos de servidor que se usan habitualmente en los SMS o comandos por lotes de Teltonika.

- Configure el rastreador para que reporte al dominio o IP del servidor de Plaspy y así el dispositivo pueda comunicarse con el backend de Plaspy
- Proporcione el APN y las credenciales de la SIM correctas para que el rastreador establezca conexión de datos celulares
- Seleccione el transporte (UDP o TCP) y el puerto compartido de Plaspy que usan todos los dispositivos
- Aplique y guarde los ajustes, luego verifique que el FMM250 aparezca en la plataforma Plaspy
- Valide las transmisiones CAN y de ubicación para que la telemetría del vehículo se refleje en los paneles de Plaspy

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are supported; the device may be configured to use either transport on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for reporting

Estos valores son el endpoint público que debe usar al configurar el FMM250 para que reporte directamente a Plaspy.

## Requisitos habituales antes de la configuración

- Un FMM250 con alimentación y accesible, instalado o alimentado en banco temporalmente para la configuración  
- Una SIM celular con plan de datos y credenciales APN que coincidan con la variante del dispositivo y el soporte del operador regional (LTE Cat M1, NB IoT, o con retroceso a 2G si aplicable)  
- Acceso al método de configuración de Teltonika que prefiera (comandos SMS, herramientas de Teltonika, o gestión remota)  
- IMEI o número de serie del dispositivo para poder identificar el rastreador en Plaspy cuando comience a reportar  
- Firmware actualizado cuando sea posible y conocimiento de la versión de firmware en caso de que el mapeo de parámetros varíe  
- Cobertura de red para la tecnología celular elegida y confirmación de que el APN permite conexiones salientes hacia el servidor de Plaspy

## Cómo se conecta este rastreador a Plaspy

El FMM250 envía ubicación celular y telemetría derivada del CAN a Plaspy a través del transporte y puerto configurados. Una vez que se apunta al endpoint compartido de Plaspy, el dispositivo transmite reportes periódicos y mensajes basados en eventos que Plaspy ingiere y mapea en los paneles de flota y flujos de telemetría.

- El rastreador informa la ubicación GPS y la telemetría CAN al endpoint de servidor de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888  
- Los mensajes del dispositivo se envían por UDP o TCP según el transporte elegido en la configuración del rastreador  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un servidor y puerto correctos son los requisitos principales para la conectividad  
- Los parámetros CAN entrantes y las actualizaciones de ubicación son procesados por Plaspy para monitorización en vivo y gráficos históricos  
- La validación de que el dispositivo reporta en Plaspy confirma tanto la conectividad como el mapeo correcto de la telemetría

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Teltonika que prefiera: SMS, configurador de Teltonika o herramienta de gestión remota.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.  
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Seleccione UDP o TCP en el dispositivo si la configuración requiere especificar el transporte.  
5. Establezca o verifique el APN y las credenciales de la SIM para que el dispositivo tenga acceso a datos móviles.  
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta de Teltonika o el método SMS lo requieren.  
7. Valide que el FMM250 informe correctamente a Plaspy y que aparezca en su vista de plataforma con ubicación y telemetría CAN.

Si usa configuración por SMS, la siguiente sección contiene un comando público de ejemplo que se utiliza comúnmente con dispositivos Teltonika.

## Comandos de configuración de ejemplo

El comando público de ejemplo de Teltonika que sigue ilustra cómo establecer las credenciales APN y apuntar el dispositivo a Plaspy. Este comando se envía habitualmente por SMS o por el canal de configuración de Teltonika cuando el dispositivo y el firmware lo soportan.

- Example setparam command (preserve placeholders when replacing with actual values):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores y los campos del comando de ejemplo:
- {{apn}} es el APN celular proporcionado por su operador móvil  
- {{apnu}} es el nombre de usuario del APN si el operador lo requiere; dejar en blanco si no se usa  
- {{apnp}} es la contraseña del APN si el operador lo requiere; dejar en blanco si no se usa  
- 2004 establece el dominio del servidor a d.plaspy.com y 2005 fija el puerto a 8888 en este ejemplo  
- 2006:1 está incluido en la secuencia de ejemplo; verifique el mapeo de parámetros para su firmware en la documentación de Teltonika, ya que el significado numérico puede variar según firmware y modelo  
- Use los procedimientos seguros de envío por SMS o de la herramienta de configuración de Teltonika y confirme que el dispositivo acepta el comando

Siempre verifique la numeración exacta de parámetros y la sintaxis de comandos en las referencias oficiales de Teltonika para la versión de firmware de su dispositivo.

## Notas de configuración

- Los números de parámetros de Teltonika y la sintaxis exacta de setparam pueden diferir entre versiones de firmware; confirme el mapeo de 2001 a 2006 en el firmware instalado.  
- Elija UDP o TCP según los requerimientos de su instalación; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- La configuración por SMS es un método público común para rastreadores Teltonika, pero puede estar limitada por las políticas de SMS de operadores regionales o por ajustes de firmware del dispositivo.  
- Conserve los marcadores de APN y reemplácelos por los valores específicos del operador al enviar comandos.  
- Tras aplicar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto; consulte la documentación de Teltonika si se requiere reinicio.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM250 con Plaspy integra hardware robusto y telemetría profunda del vehículo en un flujo de trabajo único de gestión de flota. Las capacidades de datos CAN del FMM250, combinadas con la ingestión de ubicación y telemetría por parte de Plaspy, permiten monitorizar la salud del vehículo, rastrear activos en tiempo real y crear alertas o análisis basados en parámetros extraídos del CAN y eventos de ubicación.

Para obtener más información sobre Plaspy y cómo se integra con los rastreadores compatibles visite https://www.plaspy.com. Para detalles específicos y actualizados de configuración del dispositivo, comportamiento de firmware y mapeo de parámetros, consulte la documentación de Teltonika en https://www.teltonika-gps.com/ para verificar la sintaxis y la definición de parámetros para la versión de firmware de su FMM250.
