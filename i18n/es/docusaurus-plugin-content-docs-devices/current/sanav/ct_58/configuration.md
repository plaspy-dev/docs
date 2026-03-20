---
slug: /sanav/ct_58/configuration
id: ct_58-configuration
sidebar_label: Configuration
title: Sanav - CT-58 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Sanav CT-58, incluye ajustes de servidor Plaspy y comandos SMS para integrarlo con la plataforma
keywords:
  - Configuración Sanav CT-58
  - Instalación Sanav CT-58
  - Configuración servidor Sanav CT-58
  - Configuración CT-58 Plaspy
  - Configuración rastreador Plaspy
  - Comandos SMS CT-58
  - Integración rastreador GPS Sanav
  - Configuración APN CT-58
  - Rastreo vehicular CT-58
  - Rastreo de activos CT-58
---

# Sanav - CT-58 Configuración

Esta página presenta el contexto público de configuración para usar el rastreador mini GPS Sanav CT-58 con la plataforma Plaspy. Resume los pasos prácticos y los comandos SMS públicos necesarios para dirigir el CT-58 a reportar al servidor de Plaspy, de modo que el dispositivo pueda ser monitoreado desde la plataforma. Las indicaciones aquí se centran en los ajustes de servidor compartidos que Plaspy requiere y en los comandos SMS habituales que aparecen en las notas públicas de configuración del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar y aplicar los ajustes públicos de Plaspy y siempre contraste los detalles específicos del equipo con la documentación oficial de Sanav y las notas de la versión de firmware.

## Resumen de configuración

El objetivo al configurar un Sanav CT-58 para Plaspy es preparar el rastreador para que se conecte por GPRS y envíe informes periódicos de ubicación y eventos al endpoint de Plaspy, de modo que los vehículos o activos aparezcan y se actualicen de forma confiable en la plataforma.

- Configure el rastreador para usar el APN del operador y credenciales GPRS válidas para la conectividad de datos.
- Apunte el CT-58 al endpoint y puerto del servidor Plaspy para que el dispositivo pueda enviar telemetría a la plataforma.
- Elija el transporte adecuado (UDP o TCP) si lo exige el firmware del dispositivo.
- Aplique un intervalo de reporte apropiado para que las actualizaciones de posición aparezcan con la frecuencia deseada en Plaspy.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos típicos

- Un CT-58 con batería cargada y acceso a la interfaz de configuración por SMS del dispositivo o a la herramienta de configuración del fabricante.
- Una tarjeta SIM activa con capacidad de datos y SMS insertada en el rastreador y conocer el APN del operador.
- La contraseña por defecto del dispositivo si se requiere para la configuración remota vía SMS (los comandos públicos mostrados usan la contraseña por defecto 0000).
- Acceso a un teléfono o a un gateway SMS para enviar los comandos de configuración al rastreador.
- El manual de usuario oficial de Sanav o la referencia de configuración del CT-58 para confirmar usuarios y sintaxis de comandos.
- Habilidades básicas para reiniciar el dispositivo y observar los LEDs de estado o registros durante la validación.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el CT-58 se ajusta para enviar sus mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir y decodificar los datos del rastreador.

- El rastreador usa datos GPRS para transmitir los informes de posición al endpoint de Plaspy.
- El endpoint configurado apunta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser TCP o UDP según la preferencia del dispositivo y el soporte de firmware.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo no necesita una configuración de puerto única; todos los dispositivos usan el mismo puerto.
- Una vez conectado, Plaspy recibe actualizaciones periódicas e informes de eventos que permiten visibilidad de la ubicación y monitoreo operativo en la plataforma.

## Flujo común de configuración

1. Acceda al método oficial de configuración de Sanav para el CT-58, como la interfaz de comandos por SMS o la herramienta del proveedor mencionada en el manual.
2. Verifique que el dispositivo tenga una SIM con servicio y establezca los valores del APN del operador cuando sea necesario.
3. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y ajuste el puerto del servidor a 8888.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según sus necesidades de despliegue.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS finales necesarios para confirmar los ajustes.
6. Reinicie el rastreador si el dispositivo requiere reboot para que los nuevos ajustes entren en vigor.
7. Valide que el equipo reporte a Plaspy y aparezca en la plataforma con el intervalo de reporte y los eventos esperados.

## Ejemplos de comandos de configuración

El CT-58 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos aparecen en las notas de configuración del equipo. La sintaxis de los comandos del rastreador utiliza un marcador de usuario y una contraseña. La contraseña por defecto mostrada en los comandos públicos es 0000. Reemplace username por el nombre de usuario del dispositivo si aplica y sustituya los marcadores de APN con los datos de su operador móvil.

- Restablecimiento de fábrica inicial opcional (usar solo cuando sea necesario o durante la primera configuración):
```text
#username,0000,9*
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su operador, [apnu] con el nombre de usuario del APN si es necesario, y [apnp] con la contraseña del APN si es necesaria:
```text
#username,0000,3,[apn],[apnu],[apnp]*
```

- Establecer el servidor GPRS a Plaspy usando la IP pública de Plaspy y el puerto 8888:
```text
#username,0000,18,54.85.159.138:8888*
```

- Establecer la ruta de transmisión de datos para usar el reporte por servidor (comando público de ejemplo tal como se proporciona):
```text
#username,0000,14,9*
```

- Establecer el intervalo de actualizaciones a 60 segundos (ejemplo que fija el intervalo y un valor de parámetro como en la configuración pública):
```text
#username,0000,6,60,9999*
```

Notas sobre los marcadores y campos:
- [apn] es la cadena APN del operador móvil requerida para datos GPRS.
- [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN para operadores que los requieran.
- Mantenga la contraseña por defecto 0000 a menos que la haya cambiado; siga las indicaciones del fabricante para cambiar contraseñas del dispositivo.
- Preserve el orden de los comandos cuando éste sea importante, por ejemplo configurar el APN antes de los ajustes de servidor para asegurar que el dispositivo pueda alcanzar el servidor.

## Notas de configuración

- Las revisiones de firmware o hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Verifique los comandos contra el manual oficial del CT-58 para su versión de firmware.
- El CT-58 soporta la configuración por SMS según la guía pública anterior; también pueden existir otras herramientas de configuración de Sanav que deberían usarse cuando corresponda.
- Elegir TCP frente a UDP afecta el comportamiento del transporte; seleccione el transporte soportado o recomendado por su despliegue y el firmware del dispositivo.
- Asegúrese de que los ajustes de APN sean correctos para la SIM antes de apuntar el dispositivo al endpoint de Plaspy.
- Utilice el paso de reinicio del dispositivo si los ajustes no parecen aplicarse de inmediato.

## Por qué usar Plaspy con esta configuración

Configurar el Sanav CT-58 para reportar a Plaspy ofrece una vía sencilla para integrar un rastreador compacto en un flujo centralizado de gestión de flotas o activos. Con el CT-58 reportando al endpoint compartido de Plaspy, las organizaciones obtienen visibilidad en casi tiempo real y reportes de eventos que pueden apoyar el monitoreo, la protección de activos y la toma de decisiones operativas.

Para obtener más información sobre Plaspy y las opciones de configuración compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las últimas instrucciones de configuración del CT-58 en la documentación oficial de Sanav en http://es.sanav.com/ antes del despliegue.
