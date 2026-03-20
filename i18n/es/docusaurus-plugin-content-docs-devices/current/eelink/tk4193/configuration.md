---
slug: /eelink/tk4193/configuration
id: tk4193-configuration
sidebar_label: Configuration
title: EElink - TK419‑3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK419‑3 con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - configuración EElink TK419 3
  - configuración Plaspy EElink TK419 3
  - configuración servidor TK419 3
  - comandos SMS TK419 3
  - ajustes APN TK419 3
  - integración tracker Plaspy
  - guía configuración rastreador GPS
  - configuración plataforma seguimiento de vehículos
  - configuración telemetría TK419 3
  - configuración dispositivo EElink
---

# EElink - Configuración TK419‑3

Esta página documenta el contexto público de configuración para usar el rastreador GPS EElink TK419‑3 con Plaspy. Se concentra en los ajustes publicados y en los comandos SMS prácticos que preparan el dispositivo para reportar ubicación y telemetría al endpoint compartido y puerto de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, por lo que una sola configuración de servidor funcionará con la mayoría de las unidades. Los pasos concretos en el equipo del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; por ello use esta guía junto con la documentación oficial de EElink al aplicar cambios definitivos.

## Resumen de la configuración

Este proceso prepara el rastreador para comunicarse de forma fiable con Plaspy, de modo que las posiciones, los estados de E/S y las alarmas sean visibles en la plataforma. Los comandos SMS públicos proporcionados por EElink sirven para la configuración inicial y la verificación cuando no están disponibles herramientas de aprovisionamiento OTA.

- Configure el dispositivo para enviar datos al endpoint y puerto de Plaspy para que el rastreador aparezca en la plataforma.
- Establezca el APN del operador para que el equipo pueda establecer conectividad GPRS o LTE.
- Elija UDP o TCP en el tracker si es necesario; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Defina un intervalo de reporte para controlar con qué frecuencia el equipo envía actualizaciones de ubicación a Plaspy.
- Verifique los parámetros y confirme que el dispositivo reporta correctamente a Plaspy usando un comando de comprobación de parámetros.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888  
- Plaspy automáticamente detecta el protocolo del tracker cuando el dispositivo se conecta

Estos son los ajustes públicos que debe introducir en el dispositivo o vía SMS para que Plaspy reciba la telemetría del TK419‑3.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa y válida con un plan de datos y el APN correcto del operador móvil.  
- Acceso al canal de comandos SMS del equipo si la configuración se realiza por SMS, o acceso a la herramienta de configuración del proveedor si está disponible.  
- Energía suficiente en el dispositivo e instalación estable para realizar la configuración y las pruebas.  
- El equipo debe tener la conectividad celular habilitada y encontrarse en un área con cobertura de red para GPRS o LTE.  
- Conocimiento del APN y, si aplica, del nombre de usuario y contraseña del APN requeridos por el operador.  
- Acceso a la documentación oficial de EElink o al soporte del proveedor para detalles específicos del dispositivo y diferencias de firmware.

## Cómo se conecta este rastreador a Plaspy

El TK419‑3 se configura para enviar posiciones GNSS, estados de entradas y eventos de alarma al servidor y puerto compartidos de Plaspy para que la plataforma muestre ubicación en tiempo real y la telemetría del equipo. En la práctica, la configuración establece el APN y los parámetros de servidor y, después, el dispositivo abre una sesión TCP o UDP hacia el endpoint de Plaspy.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte se puede seleccionar como UDP o TCP en el equipo; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Los mensajes de telemetría y eventos se entregan a Plaspy, donde se normalizan en actualizaciones de mapa y alertas.  
- Los intervalos de reporte controlan la frecuencia con la que el equipo transmite posición y estado al servidor compartido de Plaspy.  
- La validación se realiza confirmando los parámetros y observando conexiones exitosas al endpoint de Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de EElink, por ejemplo la interfaz SMS del proveedor o la herramienta de configuración que se le haya proporcionado.  
2. Configure el APN del operador usando el comando APN para que el dispositivo pueda conectarse a la red de datos móviles.  
3. Introduzca el servidor de Plaspy por nombre o IP usando d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.  
4. Seleccione el protocolo de transporte (UDP o TCP) si el equipo requiere una selección explícita.  
5. Aplique o guarde la configuración en el rastreador y, si procede, envíe los comandos SMS en el orden requerido.  
6. Reinicie el dispositivo si el fabricante lo indica o para forzar una nueva conexión a la red y al servidor.  
7. Valide que el equipo reporte a Plaspy comprobando el estado de parámetros y confirmando que el dispositivo aparece en la plataforma.

## Ejemplos de comandos de configuración

El TK419‑3 acepta comandos SMS públicos para la configuración básica. A continuación se muestran los comandos relevantes extraídos de las instrucciones publicadas por EElink. Envíe estos comandos como mensajes SMS desde un número autorizado o utilizando la herramienta de gestión del proveedor que soporte envío de comandos SMS.

1. Reset opcional a valores de fábrica (usar solo cuando sea necesario para una configuración limpia)
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0 (ajuste si necesita otra zona)
```
GMT,E,0#
```

3. Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador exige usuario y contraseña, incluya {{apnu}} y {{apnp}} según lo proporcione la compañía.
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es la cadena APN. {{apnu}} es el usuario del APN y {{apnp}} la contraseña del APN. Si no se requiere usuario ni contraseña, el comando puede enviarse solo con el valor del APN según el comportamiento del firmware.

4. Configurar el servidor GPRS con el dominio de Plaspy en el puerto 8888 (preferible usar el nombre de dominio)
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternativamente, establecer el servidor GPRS con la IP de Plaspy en el puerto 8888
```
SERVER,0,54.85.159.138,8888#
```

6. Definir el intervalo de actualización de reporte a 60 segundos
```
TIMER,60#
```

7. Verificar los parámetros actuales
```
PARAM#
```

Siga el orden de comandos anterior al configurar los parámetros principales. Use el comando SERVER con el dominio o la IP según se muestra. Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y detectará automáticamente el protocolo cuando el rastreador se conecte.

## Notas de configuración

- Las revisiones de firmware y hardware pueden aceptar una sintaxis SMS ligeramente distinta o requerir comandos en una forma diferente; consulte la documentación de EElink para detalles específicos por firmware.  
- Pueden estar soportadas tanto la configuración por SMS como las herramientas del proveedor; use el método recomendado por su instalador o por EElink en su región.  
- La selección TCP versus UDP está disponible; elija el transporte apropiado según su instalación y entorno de red. Plaspy acepta ambos y detecta el protocolo al conectarse.  
- Conserve los marcadores de APN exactamente como se indican al componer los comandos y sustitúyalos por los valores del operador durante la configuración.  
- Si realiza un reset de fábrica, considérelo opcional y úselo solo cuando necesite un estado de configuración limpio.

## Por qué usar Plaspy con esta configuración

Usar el TK419‑3 con Plaspy ofrece a administradores de flotas y activos una vía directa hacia ubicación en tiempo real, alertas orientadas a eventos y reporte de telemetría. Los comandos SMS publicados permiten que los técnicos aprovisionen rápidamente APN y ajustes de servidor, y el servidor compartido de Plaspy junto con la detección automática de protocolo simplifican la incorporación continua de dispositivos.

Learn more about Plaspy and supported device workflows at https://www.plaspy.com. For the latest TK419‑3 firmware behavior, command syntax, and manufacturer guidance verify device specific setup details on the official EElink website https://www.eelink.com.cn/ as vendor documentation and firmware can change over time.
