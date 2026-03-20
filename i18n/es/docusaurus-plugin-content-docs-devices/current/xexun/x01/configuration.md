---
slug: /xexun/x01/configuration
id: x01-configuration
sidebar_label: Configuration
title: Xexun - X01 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Xexun X01 para Plaspy con ajustes de servidor, comandos y guía práctica para seguimiento vehicular confiable
keywords:
  - Configuración Xexun X01
  - Instalación Xexun X01
  - Xexun X01 Plaspy
  - configuración rastreador Xexun
  - configuración rastreador GPS Plaspy
  - configuración rastreador vehicular
  - configuración seguimiento flotas
  - configuración servidor Xexun X01
  - configuración plataforma rastreo
  - comandos SMS Xexun X01
---

# Xexun - Configuración del X01

Esta página describe el contexto público de configuración para usar el rastreador Xexun X01 con Plaspy. Resume los ajustes de servidor de Plaspy a los que debe apuntar el dispositivo, explica el flujo típico de instalación e incluye los comandos de configuración SMS públicos que trae el X01 para una integración básica. Utilice esta guía para preparar el dispositivo y garantizar su visibilidad en Plaspy, siguiendo sus procedimientos de instalación y seguridad.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El X01 es compatible con Plaspy desde fábrica y admite comandos de configuración por SMS que se muestran más abajo; verifique diferencias específicas del dispositivo en la documentación de Xexun cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar el X01 para Plaspy es preparar el equipo para comunicarse de forma confiable con los servidores de Plaspy, validar la conectividad y habilitar el rastreo en vivo y la reproducción histórica en la plataforma. El flujo público de configuración normalmente establece el APN del operador, configura el endpoint y puerto GPRS del servidor, define intervalos de reporte y confirma que el dispositivo está reportando a Plaspy.

- Configure el APN de datos celulares y las credenciales de APN opcionales que requiera su operador.
- Configure el rastreador para que reporte al servidor Plaspy d.plaspy.com o a su dirección IP en el puerto compartido de Plaspy.
- Seleccione el modo de transporte (UDP o TCP) cuando el dispositivo requiera elegir transporte.
- Establezca los intervalos de reporte para que el dispositivo envíe actualizaciones de ubicación con la frecuencia deseada.
- Valide que el rastreador aparezca en Plaspy y esté enviando datos en vivo.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores exactos son los que Plaspy utiliza para recibir telemetría de los rastreadores soportados, incluido el X01.

## Requisitos típicos antes de la configuración

- Un dispositivo Xexun X01 alimentado e accesible, instalado en el vehículo o conectado a una fuente de alimentación de banco.
- Una tarjeta SIM con datos activos y capacidad de SMS insertada y registrada en una red celular compatible con el equipo.
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta oficial de configuración.
- Conocimiento de la contraseña del dispositivo; los ejemplos públicos usan la contraseña por defecto 123456.
- Un teléfono móvil capaz de enviar SMS al rastreador para la configuración basada en SMS, si elige ese método.

## Cómo se conecta este rastreador a Plaspy

El X01 se configura para enviar paquetes de posición y estado al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar ubicación en vivo, rutas y alertas. La configuración asegura que el dispositivo utilice el APN correcto para datos celulares y la dirección y puerto correctos para la ingesta en Plaspy.

- El rastreador envía paquetes GNSS de posición y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los paquetes entrantes para mapeo, alertas e historial.
- Los intervalos de reporte y los disparadores de eventos controlan la frecuencia de transmisión de datos hacia Plaspy.
- Después de la configuración, verifique que el dispositivo sea visible en el panel de Plaspy y que esté enviando telemetría.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepare un teléfono para la configuración por SMS según documenta Xexun.
2. Configure los ajustes APN del equipo para el operador usando los comandos APN o la herramienta del fabricante.
3. Introduzca la dirección del servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto en 8888.
4. Elija el tipo de transporte UDP o TCP si el dispositivo requiere esa selección.
5. Defina los intervalos de reporte y los umbrales de evento necesarios para su caso de uso y aplique o guarde la configuración.
6. Reinicie o haga un ciclo de energía del dispositivo si el fabricante lo solicita para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la ubicación en vivo y la telemetría en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El Xexun X01 soporta configuración mediante SMS. Los siguientes comandos públicos aparecen en el material del fabricante. Envíe estos comandos como mensajes SMS al dispositivo en el orden mostrado cuando corresponda.

Notas:
- El ejemplo usa la contraseña del dispositivo 123456, que es la configuración de fábrica usada en los comandos públicos que siguen.
- Mantenga los marcadores tal como aparecen. Reemplace {{apn}} con el APN de su operador, {{apnu}} con el nombre de usuario APN si se requiere, y {{apnp}} con la contraseña APN si se requiere.
- El comando adminip que aparece más abajo muestra la IP pública y el puerto de Plaspy; también puede introducir d.plaspy.com en lugar de la IP si el dispositivo acepta nombres de dominio.

1. Restauración de fábrica opcional en la configuración inicial
```text
begin123456
```
(Etiquetas: opcional o configuración inicial. Use solo cuando necesite restaurar los valores de fábrica.)

2. Configurar el APN del operador
```text
apn123456 {{apn}}
```

3. Establecer el usuario del APN (si el operador lo requiere)
```text
apnuser123456 {{apnu}}
```

4. Establecer la contraseña del APN (si el operador lo requiere)
```text
apnpasswd123456 {{apnp}}
```

5. Configurar el servidor GPRS a Plaspy utilizando la IP pública y el puerto compartido
```text
adminip123456 54.85.159.138 8888
```
(Puede usar d.plaspy.com en lugar de la IP si el dispositivo acepta nombres de dominio.)

6. Establecer el modo GPRS
```text
gprsmode123456
```

7. Configurar el intervalo de actualización temporal a 60 segundos
```text
t060s***n123456
```
(Ajuste el comando de intervalo según la sintaxis del dispositivo para otros valores.)

## Notas de configuración

- La configuración por SMS está documentada en los comandos públicos anteriores; algunos instaladores prefieren usar la herramienta de configuración del fabricante. Utilice el método recomendado para el firmware de su dispositivo.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme los comandos con el manual del dispositivo si observa comportamientos inesperados.
- Si su operador no solicita usuario/contraseña de APN, omita esos pasos; los comandos de usuario y contraseña de APN son opcionales para muchos operadores.
- Al elegir entre UDP y TCP, considere la confiabilidad de la red y el comportamiento del operador; Plaspy acepta ambos transportes y detectará el protocolo automáticamente.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, por lo que no necesita puertos específicos por modelo al integrar múltiples rastreadores.

## Por qué usar Plaspy con esta configuración

Usar el Xexun X01 con Plaspy facilita la integración para equipos que requieren visibilidad continua de vehículos y supervisión operativa. Apuntar el X01 al servidor y puerto compartidos de Plaspy permite a los gestores de flota ver posiciones en vivo, reproducir historial y recibir alertas por geocercas, manipulaciones y batería baja a través de la interfaz de Plaspy.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para la sintaxis de comandos específica del dispositivo, notas de firmware y la documentación técnica más reciente del X01, confirme la guía del fabricante en https://www.xexun.com/ antes de desplegar a gran escala.
