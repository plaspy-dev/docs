---
slug: /teltonika/fmc225/configuration
id: fmc225-configuration
sidebar_label: Configuration
title: Teltonika - FMC225 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Teltonika FMC225 con Plaspy usando servidores compartidos y pasos prácticos
keywords:
  - Configuración Teltonika FMC225
  - Configuración FMC225 Plaspy
  - Guía configuración Teltonika
  - Configuración servidor FMC225
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Rastreador para gestión de flotas
  - Configuración rastreador Teltonika
  - Integración telemetría FMC225
---

# Teltonika - Configuración del FMC225

Esta página explica el contexto público de configuración para usar el rastreador Teltonika FMC225 con Plaspy. Detalla los ajustes de servidor compartido de Plaspy a los que el dispositivo debe reportar y muestra un ejemplo práctico de comando que frecuentemente se utiliza para definir parámetros clave. Use esta guía para preparar una unidad FMC225 robusta y asegurar reportes confiables a Plaspy, teniendo en cuenta que la documentación del fabricante y las notas de versión de firmware son la referencia final para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que utilice. Si piensa aplicar el comando de ejemplo mostrado más abajo, confirme el formato y el significado de los parámetros en la documentación de Teltonika o en las notas de su firmware.

## Resumen de configuración

Este proceso prepara el FMC225 para comunicarse con la plataforma Plaspy de modo que la ubicación, la telemetría y los eventos se entreguen de forma fiable. El objetivo es establecer parámetros de APN si son requeridos, apuntar el dispositivo al endpoint y puerto del servidor Plaspy y verificar que el equipo sea visible y reporte en Plaspy.

- Configurar el APN y credenciales relacionadas para que el FMC225 pueda usar su enlace celular y alcanzar Plaspy.
- Ajustar el endpoint y puerto del servidor para dirigir la telemetría a d.plaspy.com en el puerto compartido de Plaspy.
- Seleccionar el método de transporte si el equipo requiere elección de transporte y guardar la configuración.
- Validar la conectividad y confirmar que el rastreador aparezca en los tableros y reportes de Plaspy.
- Aplicar los ajustes usando herramientas del fabricante o comandos SMS según lo permita su dispositivo y firmware.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos previos habituales

- Una unidad FMC225 conectada y operativa instalada según las instrucciones del instalador.
- Tarjeta(s) SIM activa(s) y conectividad celular para LTE o con fallback a 2G según la región y cobertura.
- APN del operador, nombre de usuario y contraseña del APN listos para el perfil SIM que vaya a utilizar.
- Acceso al método de configuración Teltonika que prefiera, como comandos SMS o la herramienta oficial de configuración del fabricante.
- Acceso físico o consola remota para probar la conectividad y reiniciar el dispositivo si es necesario.

## Cómo se conecta este rastreador a Plaspy

El FMC225 transmite posiciones GNSS y telemetría del vehículo a través de la red celular hacia el endpoint y puerto compartido de Plaspy, de modo que Plaspy recibe datos de ubicación, sensores y eventos para su visibilidad y monitoreo. Plaspy procesa el protocolo entrante de forma automática para presentar la información en paneles y APIs.

- El equipo reporta posiciones GNSS y marcas de tiempo a Plaspy d.plaspy.com en el puerto 8888.
- La telemetría procedente de puertos seriales e impulsos de combustible se reenvía a Plaspy para diagnóstico e informes de combustible.
- Los eventos de entradas digitales y analógicas llegan a Plaspy para alarmas, detección de ignición y flujos con periféricos.
- La doble SIM garantiza continuidad, de modo que el rastreador mantiene conexión al servidor Plaspy en escenarios con múltiples operadores.
- La detección automática de protocolos de Plaspy elimina, en la mayoría de los casos, la necesidad de especificar un protocolo de plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Teltonika o al software para el FMC225, como la interfaz de comandos SMS o la herramienta de configuración del fabricante.
2. Introduzca la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según su preferencia.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
4. Elija UDP o TCP si el equipo requiere selección de transporte e incluya esa opción en la configuración guardada.
5. Aplique o guarde la configuración en el dispositivo utilizando el método del fabricante con el que editó los ajustes.
6. Reinicie o haga un ciclo de energía en el equipo si su firmware o herramienta lo exige para activar los cambios.
7. Valide que el dispositivo reporte a Plaspy y confirme su visibilidad en los paneles de Plaspy o mediante endpoints de estado del dispositivo.

## Ejemplo de comandos de configuración

Para configurar los parámetros básicos en su equipo Teltonika, se suele utilizar una única cadena de comando. Este ejemplo se ofrece en el formato público del fabricante y conserva marcadores de posición para los valores APN. La cadena de ejemplo a continuación normalmente se envía como comando estilo SMS o se introduce mediante la herramienta de configuración según su método.

- Comando de parámetros en lote de ejemplo

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de marcadores y campos
- [apn] es el APN del operador requerido para datos celulares.
- [apnu] es el nombre de usuario del APN cuando su operador lo solicita.
- [apnp] es la contraseña del APN cuando su operador la solicita.
- 2004:d.plaspy.com configura el equipo para reportar al dominio del servidor Plaspy.
- 2005:8888 establece el puerto compartido de Plaspy usado por todos los dispositivos.
- 2006:1 se incluye en esta cadena de parámetros como parte del conjunto de parámetros del equipo. Consulte la documentación de Teltonika para conocer el significado exacto de cada índice numérico de parámetro según su versión de firmware.

Si no está seguro de cómo enviar este comando para la versión de firmware o la revisión de hardware de su FMC225, use las herramientas oficiales de Teltonika o la documentación para confirmar si SMS, paquete UDP o una utilidad de configuración es el método correcto de entrega.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los IDs de parámetros y la sintaxis exacta de los comandos. Revise siempre la documentación de Teltonika para la versión de firmware que ejecuta su FMC225 antes de aplicar comandos.
- Debido a que Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos, por lo general solo necesita configurar la dirección y el puerto del servidor. Aun así, confirme la selección de transporte si su flujo de trabajo o red local requiere UDP o TCP.
- La doble SIM y las variantes regionales de radio afectan la conectividad y la selección de APN. Asegúrese de aplicar los ajustes de APN al perfil de SIM activo.
- El comando de ejemplo mostrado es un lote de parámetros en estilo público. Algunos instaladores prefieren la interfaz gráfica del fabricante o herramientas de gestión remota para despliegues masivos y gestión de firmware.
- Tras aplicar los ajustes, verifique la accesibilidad del dispositivo y que los mensajes de posición y telemetría aparezcan en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMC225 junto con Plaspy brinda a las flotas visibilidad continua y telemetría operativa incluso en entornos exigentes. El diseño robusto del FMC225 y sus interfaces de telemetría permiten ubicación precisa, monitoreo de combustible y control de periféricos, mientras que Plaspy recopila y presenta esos datos para monitoreo, reportes y alertas.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los detalles específicos de configuración y el comportamiento del firmware en el sitio oficial de Teltonika https://www.teltonika-gps.com/ para asegurar que los comandos e IDs de parámetros sean los correctos para la revisión de su FMC225.
