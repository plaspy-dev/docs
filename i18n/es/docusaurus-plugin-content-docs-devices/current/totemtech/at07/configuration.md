---
slug: /totemtech/at07/configuration
id: at07-configuration
sidebar_label: Configuration
title: Totemtech - AT07 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el rastreador Totemtech AT07 para reportar a Plaspy usando servidor público y comandos SMS de ejemplo
keywords:
  - Configuración Totemtech AT07
  - Instalación Totemtech AT07
  - Configuración servidor AT07
  - Configuración AT07 Plaspy
  - Configuración rastreador GPS Plaspy
  - Instalación tracker GPS Totemtech
  - Rastreo de vehículos AT07
  - Configuración GPRS AT07
  - Configuración plataforma GPS Plaspy
  - Configuración SMS AT07
---

# Totemtech - Configuración AT07

Esta página documenta la configuración pública para usar el rastreador GPS Totemtech AT07 con Plaspy. Se concentra en los ajustes de servidor y en el flujo de configuración práctico que puede aplicar para que el AT07 envíe datos de ubicación y estado a Plaspy empleando la información pública disponible para este modelo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El AT07 admite tanto comandos por SMS como por GPRS; esta guía usa ese comportamiento público para mostrar cómo apuntar el dispositivo a Plaspy.

## Resumen de la configuración

Configurar el AT07 para Plaspy prepara el dispositivo para enviar datos de rastreo de forma fiable a un punto final común de Plaspy y garantiza que el rastreador aparezca en la plataforma para su monitoreo. La configuración pública suele incluir definir el APN para datos móviles, apuntar el dispositivo al endpoint de Plaspy, seleccionar el método de transporte si es necesario y validar que el equipo reporte correctamente.

- Configure el APN del operador para que el rastreador use datos GPRS y alcance el endpoint de Plaspy.
- Establezca la entrada de servidor del dispositivo apuntando a Plaspy con el dominio o IP y el puerto compartido.
- Elija UDP o TCP en el dispositivo si se requiere selección de transporte.
- Envíe la configuración de servidor y APN al AT07 por SMS o mediante la herramienta del fabricante.
- Valide la conectividad y el reporte en Plaspy para confirmar que el dispositivo es visible y envía las actualizaciones esperadas.

## Ajustes del servidor Plaspy

Use los ajustes públicos de servidor de Plaspy que aparecen a continuación al configurar el AT07. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente, por lo que debe ingresar los valores exactamente como se muestran cuando el dispositivo o la herramienta del fabricante lo soliciten.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Requisitos típicos antes de la configuración

- Un rastreador AT07 alimentado y accesible en el vehículo o activo.
- Una SIM activa con plan de datos y los datos APN correctos del operador móvil.
- Acceso al método de configuración soportado por el fabricante para el AT07, como comandos SMS o software del proveedor.
- Conocimiento de la contraseña del dispositivo si la configuración por SMS está protegida (el ejemplo público usa 000000 como contraseña por defecto).
- Una cuenta en Plaspy y la posibilidad de validar el reporte del dispositivo en la plataforma.
- Herramientas básicas para reiniciar el dispositivo o cortar y restaurar la alimentación si el equipo necesita reiniciarse para aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El AT07 puede enviar datos GPRS a una dirección IP o un nombre de dominio elegido y acepta configuración vía SMS o comandos GPRS. Al apuntarlo a Plaspy, el rastreador reporta al endpoint compartido de Plaspy y los datos de ubicación y estado quedan visibles en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Las actualizaciones de ubicación y los eventos del dispositivo se envían desde el AT07 a Plaspy por GPRS usando el transporte seleccionado.
- Los eventos de movimiento y estado generados por el AT07 se transmiten a Plaspy para su visualización y monitoreo.
- Plaspy recibe los datos entrantes en el puerto común y detecta automáticamente el protocolo del dispositivo para su parseo y presentación.
- Tras una configuración exitosa, el dispositivo debería aparecer y reportar en la plataforma Plaspy para su monitoreo operativo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del Totemtech AT07 o al software proporcionado por el proveedor, o prepárese para enviar comandos SMS si el dispositivo lo soporta.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 cuando se lo solicite el equipo.
3. Configure el puerto del servidor en 8888.
4. Seleccione UDP o TCP en el dispositivo si requiere elegir el protocolo de transporte.
5. Guarde o aplique la configuración en el dispositivo o vía SMS siguiendo las instrucciones del fabricante.
6. Reinicie o aplique un ciclo de alimentación al rastreador si el equipo necesita reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con las actualizaciones esperadas.

## Ejemplos de comandos de configuración

El AT07 admite configuración por SMS. Los siguientes comandos SMS públicos muestran una secuencia típica. La contraseña del dispositivo utilizada en estos ejemplos es 000000, que es el valor predeterminado público indicado en la documentación del proveedor. La secuencia se ordena para una configuración típica; el reinicio de fábrica es opcional y debe usarse solo cuando sea necesario.

- Reinicio de fábrica (paso inicial opcional)
```text
*000000,007#
```

- Establecer el APN del operador (reemplace los marcadores con los valores de su operador)
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el nombre del punto de acceso, {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Complete u omita usuario y contraseña según los requisitos de su operador de SIM.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
*000000,003,54.85.159.138,8888,1
```
Explicación: Este comando establece la entrada del servidor GPRS con la IP y el puerto de Plaspy. El último campo numérico forma parte del formato de comando del dispositivo según el fabricante.

- Habilitar ACK o acuses de recibo según ejemplos del proveedor
```text
*000000,019,1#
```

- Establecer intervalo periódico de actualización a 60 segundos
```text
*000000,60,60,0,60#
```
Explicación: Este ejemplo configura un cronograma de reporte que incluye un intervalo de actualización de 60 segundos. Ajuste los valores para que coincidan con sus necesidades de reporte y las regulaciones locales.

## Notas de configuración

- Las revisiones de firmware y las variantes de hardware pueden cambiar el formato de los comandos o las funciones disponibles; verifique los comandos con el firmware del dispositivo y la documentación de Totemtech.
- El AT07 admite configuración por SMS y por GPRS; elija el método que mejor se adapte al acceso del instalador y a las prácticas de seguridad.
- Puede elegir transporte TCP o UDP al configurar el rastreador; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del dispositivo.
- Plaspy usa el mismo puerto en los dispositivos soportados, lo que simplifica la configuración y las entradas de servidor en despliegues de flota.
- Confirme las credenciales APN y la conectividad de datos antes de configurar los parámetros de servidor para evitar falsos negativos durante la validación.

## Por qué usar Plaspy con esta configuración

Usar el Totemtech AT07 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la visibilidad y el monitoreo. Al apuntar el AT07 al servidor de Plaspy se garantiza la recepción constante de actualizaciones de ubicación y eventos, lo que permite a gestores de flotas y activos mantener conciencia situacional y control operativo.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and official command reference check Totemtech resources at http://www.totemtek.com/ as manufacturer specifications and methods can change over time.
