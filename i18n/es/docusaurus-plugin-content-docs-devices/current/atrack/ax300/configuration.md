---
slug: /atrack/ax300/configuration
id: ax300-configuration
sidebar_label: Configuration
title: ATrack - AX300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el ATrack AX300 a Plaspy con comandos y ajustes de servidor prácticos
keywords:
  - Configuración ATrack AX300
  - Configuración AX300 Plaspy
  - Configuración servidor ATrack AX300
  - Configuración rastreador AX300 GPS
  - Configuración OBD AX300 ATrack
  - AX300 rastreador LTE M
  - Configuración seguimiento flotas AX300
  - Configuración dispositivo Plaspy
  - Configuración telemetría AX300
  - Plataforma seguimiento ATrack AX300
---

# ATrack - Configuración AX300

Esta página documenta el contexto de configuración pública para usar el rastreador ATrack AX300 con Plaspy. Resume los ajustes del servidor Plaspy necesarios para la conectividad, pasos prácticos de configuración y ejemplos de comandos públicos del AX300 para que pueda preparar el dispositivo para su uso con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; los comandos que se muestran a continuación son ejemplos públicos para el AX300 y deben usarse como referencia junto con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el AX300 para reportar posición GNSS y telemetría del vehículo a Plaspy usando el endpoint y puerto compartido de la plataforma. El objetivo es configurar eventos e intervalos de reporte, establecer el formato de datos correcto y direccionar las opciones GPRS hacia Plaspy para que la plataforma interprete automáticamente el protocolo del dispositivo y lo muestre en su cuenta.

- Configure el reporte de eventos como ACC/ignición para que Plaspy reciba cambios de estado relevantes.
- Establezca un intervalo de seguimiento periódico para controlar la frecuencia de envíos de posición del AX300.
- Ponga el rastreador en el modo de datos y red requerido por Plaspy.
- Configure los ajustes GPRS del AX300 apuntando a Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de aplicar los cambios.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com es el nombre de host público que debe usar al configurar direccionamiento basado en DNS.
- La IP de servidor 54.85.159.138 puede usarse cuando el dispositivo requiere una dirección IP.
- El puerto 8888 es el puerto único que Plaspy utiliza para todos los dispositivos compatibles.
- Soporte de transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta al servidor y envía sus paquetes iniciales.

## Requisitos habituales antes de la configuración

- Alimentar el AX300 desde el puerto OBD-II del vehículo o desde una fuente de 12V/24V adecuada y confirmar que los LED de estado del dispositivo están activos.
- Una SIM celular válida con plan de datos y valores APN correctos para su operador; a continuación se usan marcadores de posición para APN, usuario y contraseña.
- Acceso al método oficial de configuración ATrack, como la herramienta USB, ADM, comandos SMS o consola del dispositivo según su firmware y conjunto de herramientas.
- Acceso físico al vehículo y al conector OBD-II para verificar la instalación y el acceso a CAN/OBD si fuese necesario.
- Opcional: una laptop o terminal para enviar comandos estilo AT si usa configuración por serial o USB.
- Asegúrese de disponer del firmware actual del dispositivo y de la guía de configuración del fabricante para referencia.

## Cómo se conecta este rastreador a Plaspy

El AX300 se configura para abrir una sesión de datos GPRS y enviar su posición y telemetría al endpoint y puerto compartido de Plaspy. Una vez conectado, Plaspy detectará automáticamente el protocolo del dispositivo y mostrará la ubicación, estados de eventos y telemetría en la plataforma.

- El rastreador reporta soluciones GNSS y mensajes impulsados por eventos a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte se establece sobre UDP o TCP según la opción de configuración seleccionada en el dispositivo.
- El reporte de eventos (por ejemplo ACC encendido/apagado) y los intervalos de seguimiento periódicos determinan cuándo el AX300 envía datos a Plaspy.
- Plaspy recibe los paquetes entrantes y mapea el protocolo del dispositivo automáticamente para que la telemetría y la ubicación se muestren en la cuenta.
- La validación de la conectividad se realiza verificando la visibilidad del dispositivo y las actualizaciones de posición recientes en Plaspy tras la configuración.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de ATrack apropiado para su firmware AX300 (USB, ADM, SMS o terminal).
2. Introduzca la dirección del servidor Plaspy ya sea como d.plaspy.com o la IP 54.85.159.138 según las opciones del campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP en el dispositivo si la selección de transporte es requerida.
5. Configure los eventos y los intervalos de reporte (por ejemplo reglas de evento ACC y un intervalo de seguimiento de 60 segundos) y establezca el formato de datos del dispositivo.
6. Aplique o guarde la configuración y reinicie el AX300 si el dispositivo o el flujo de trabajo requieren un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy observando actualizaciones de posición entrantes y el estado del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

Los siguientes comandos de ejemplo provienen de la guía pública de configuración del AX300 y demuestran pasos típicos para configurar el reporte de eventos, el intervalo de seguimiento, el formato de datos y los ajustes del servidor GPRS. Mantenga los marcadores de posición al introducir los valores APN de su operador.

- Configurar manejo de evento ACC y acciones de reporte
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Ajustar intervalo de seguimiento periódico a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Establecer el formato de salida en modo binario
```text
AT$FORM=1,@P,0,""
```

- Configurar el servidor GPRS apuntando a Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Notas sobre los marcadores de posición
- [apn] es la cadena APN del operador necesaria para datos móviles.
- [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN; déjelos vacíos si su operador no los requiere.

- Comprobar estado del dispositivo (verificación)
```text
AT$INFO=?
```

Use estos comandos a través del canal de configuración que recomiende el fabricante. Dependiendo de su implementación, los comandos pueden enviarse por USB, serial, SMS o una herramienta del proveedor. Confirme siempre el transporte correcto para emitir comandos según el firmware de su AX300.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar los comandos y parámetros disponibles; verifique la sintaxis exacta de comandos para su revisión del AX300.
- TCP versus UDP: elija el transporte que se adapte a su red y requisitos de instalación; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo en uso.
- Mantenga los marcadores de APN intactos hasta reemplazarlos por los valores de su operador; una configuración APN incorrecta impedirá la conectividad GPRS.
- Algunos instaladores prefieren usar ATrack Device Management (ADM) o la herramienta USB del proveedor para configuración en bloque en lugar de enviar comandos AT crudos.
- Tras aplicar la configuración, espere el tiempo necesario para que el dispositivo se registre en la red móvil y establezca una sesión con d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Usar el AX300 con Plaspy ofrece un camino directo para unificar la ubicación GNSS, diagnósticos derivados del OBD y el reporte de eventos en una sola plataforma de gestión de flotas. Con la detección automática de protocolos de Plaspy y un endpoint de servidor compartido, el AX300 puede proporcionar visibilidad del vehículo en tiempo real, alertas de ignición y eventos, y análisis basados en telemetría que ayudan a los operadores a reducir tiempos de inactividad y mejorar las operaciones de la flota.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique las instrucciones más recientes del AX300 y las notas de firmware en el sitio del fabricante https://www.atrack.com.tw/ antes de un despliegue masivo.
