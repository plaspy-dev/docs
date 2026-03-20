---
slug: /meitrack/mt_80/configuration
id: mt_80-configuration
sidebar_label: Configuration
title: Meitrack - MT-80 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack MT-80 con Plaspy, ajustes de servidor y comandos SMS
keywords:
  - Meitrack MT 80
  - Configuración MT 80
  - Configuración Meitrack
  - Configuración de rastreador para Plaspy
  - Configuración de rastreador GPS
  - Configuración MT 80 para Plaspy
  - Configuración de servidor MT 80
  - Configuración de plataforma GPS
  - Configuración de seguimiento de activos
  - Configuración de rastreador personal
---

# Meitrack - MT-80 Configuración

Esta página documenta el contexto público de configuración para usar el Meitrack MT-80 con Plaspy. Explica los valores de servidor compartidos por Plaspy, ofrece orientación práctica de instalación y reúne los comandos SMS públicos más comunes para el MT-80, para que pueda preparar el dispositivo y conectarlo a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los valores de servidor de Plaspy al MT-80 y verificar que el rastreador reporte correctamente a Plaspy.

## Resumen de la configuración

El objetivo de configurar el MT-80 para Plaspy es garantizar que el rastreador pueda establecer una conexión fiable con el endpoint del servidor de Plaspy y reportar datos de ubicación y eventos en el puerto y transporte acordados. Esta página se concentra en los pasos prácticos para preparar el MT-80 para comunicarse con Plaspy y validar la conectividad en la plataforma.

- Ingrese los ajustes del servidor Plaspy en el dispositivo usando el método soportado por el fabricante, como SMS o software de configuración.
- Configure el MT-80 para usar el endpoint compartido de Plaspy y el puerto requerido para que Plaspy reciba la telemetría.
- Verifique la selección del transporte y la conectividad para que el rastreador aparezca en línea en Plaspy.
- Valide el envío de reportes comprobando actualizaciones de ubicación y las alarmas de eventos seleccionadas en Plaspy.
- Mantenga la documentación del fabricante y las notas de firmware a mano en caso de diferencias en comandos o comportamiento.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com para configuraciones basadas en DNS.
- IP del servidor: 54.85.159.138 para configuración directa por IP.
- Puerto: 8888, que Plaspy utiliza para todos los dispositivos soportados.
- Transporte: soporte para UDP o TCP según la opción del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint y puerto de Plaspy.

## Requisitos típicos antes de la configuración

- Un dispositivo MT-80 cargado y funcional con acceso a su interfaz de SMS o a la herramienta de configuración.
- Una tarjeta SIM activa con datos habilitados si va a usar reportes GPRS, y disponer de los datos APN correctos.
- La contraseña por defecto del dispositivo si es requerida para los comandos de configuración (los ejemplos del MT-80 abajo usan la contraseña por defecto 0000).
- Acceso a las instrucciones o herramientas oficiales de Meitrack para confirmar la sintaxis de comandos según la versión de firmware de su dispositivo.
- Un método para recibir las respuestas del dispositivo, como el teléfono del propietario de la SIM o una consola, para confirmar mensajes de éxito.

## Cómo se conecta este rastreador a Plaspy

El MT-80 se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma reciba los mensajes de ubicación y eventos. Cuando está configurado correctamente, el rastreador enviará actualizaciones periódicas de posición y alarmas al endpoint de Plaspy en el puerto 8888 usando UDP o TCP según la configuración del dispositivo.

- El dispositivo envía reportes de posición y eventos a d.plaspy.com o a 54.85.159.138.
- Los reportes se dirigen al puerto 8888, que Plaspy utiliza para todos los dispositivos.
- El transporte puede ser UDP o TCP según lo seleccione durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes para ese dispositivo.
- Una configuración exitosa permite visibilidad y monitoreo de eventos dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Meitrack, como comandos SMS o el software de Meitrack, que coincida con el firmware de su MT-80.
2. Ingrese el endpoint de Plaspy usando d.plaspy.com o la IP directa 54.85.159.138 según su preferencia.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Elija UDP o TCP si el MT-80 requiere seleccionar el tipo de transporte.
5. Aplique o guarde la configuración y confirme que el dispositivo acepta los ajustes.
6. Reinicie el dispositivo si el rastreador requiere un reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en línea y las actualizaciones recientes de ubicación en la plataforma.

## Comandos de configuración de ejemplo

El MT-80 soporta configuración vía SMS. Los siguientes comandos SMS públicos son ejemplos extraídos del contenido de configuración publicado por Meitrack. Los comandos de muestra usan la contraseña por defecto del dispositivo 0000. Conserve los marcadores de posición al enviar los comandos y reemplácelos por sus valores reales.

- La contraseña por defecto usada en los ejemplos es 0000
- {{apn}} es un marcador de posición para la cadena APN de su SIM
- {{apnu}} es un marcador de posición para el usuario APN cuando se requiere
- {{apnp}} es un marcador de posición para la contraseña APN cuando se requiere

1. Reinicio opcional a la configuración de fábrica
```sms
0000,F11
```
Etiqueta: Configuración inicial opcional o restauración de fábrica. Use solo cuando necesite restablecer el dispositivo a valores de fábrica.

2. Configurar el servidor GPRS a Plaspy usando IP directa y puerto, incluyendo APN y credenciales APN opcionales
```sms
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Nota: Este comando configura el reporte GPRS al servidor Plaspy por IP y puerto. Puede sustituir d.plaspy.com en configuraciones que soporten DNS si lo prefiere.

3. Ajustar la zona horaria a UTC 0
```sms
0000,B36,0
```

4. Establecer el intervalo de actualización a cada 1 minuto
```sms
0000,A12,6,0
```

5. Configurar el reporte de eventos
```sms
0000,C03,0
```

Envíe estos comandos SMS desde el número del propietario de la SIM o desde el número autorizado en la configuración del dispositivo. Espere las respuestas de confirmación del dispositivo antes de proceder al siguiente paso.

## Notas de configuración

- La configuración vía SMS está soportada y se ilustra arriba. Use el método apropiado según su firmware y flujo de gestión.
- Plaspy soporta tanto UDP como TCP en el mismo puerto 8888; elija el transporte que se ajuste a los requisitos de su proyecto y a las opciones del dispositivo.
- La sintaxis de firmware y comandos puede variar según el lote de producción o la revisión de firmware. Confirme la sintaxis exacta con la documentación de Meitrack para el firmware de su MT-80.
- Cuando use marcadores como {{apn}}, {{apnu}} y {{apnp}}, reemplácelos por los valores proporcionados por su operador móvil.
- Si prefiere DNS en lugar de IP directa, use d.plaspy.com como nombre de servidor en lugar de la dirección IP.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack MT-80 con Plaspy ofrece un camino sencillo para centralizar el reporte de ubicaciones, eventos y telemática básica. El soporte del MT-80 para SMS y reportes GPRS y los comandos SMS públicos permiten a los instaladores configurar los dispositivos rápidamente para que apunten al endpoint y puerto compartidos de Plaspy y así poder monitorearlos en la plataforma.

Para obtener más información sobre Plaspy y cómo maneja los datos de los rastreadores visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, notas de firmware e instrucciones del fabricante, siempre verifique los detalles en el sitio oficial de Meitrack https://www.meitrack.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
