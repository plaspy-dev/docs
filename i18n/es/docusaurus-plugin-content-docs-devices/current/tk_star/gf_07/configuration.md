---
slug: /tk_star/gf_07/configuration
id: gf_07-configuration
sidebar_label: Configuration
title: TK-Star - GF 07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK-Star GF 07 con ajustes de servidor Plaspy y comandos SMS para puesta en marcha y conectividad
keywords:
  - Configuración TK-Star GF 07
  - Configuración GF 07
  - Configuración servidor GF 07
  - Configuración Plaspy GF 07
  - Configuración rastreador GPS Plaspy
  - Guía configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador de activos
  - Comandos rastreador TK-Star
  - Configuración GPRS rastreador
---

# TK-Star - GF 07 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador TK-Star GF 07 con Plaspy. Se centra en los ajustes de servidor prácticos, los comandos SMS públicos de configuración y el flujo de trabajo necesario para registrar el dispositivo y permitir que envíe datos de posición a la plataforma Plaspy. El GF 07 es un rastreador compacto de posicionamiento GSM que utiliza una tarjeta SIM para conectividad y puede configurarse mediante comandos SMS del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Esta guía muestra los comandos SMS públicos comunes proporcionados por el fabricante y explica cómo aplicar los valores del servidor Plaspy para que el rastreador reporte a su cuenta Plaspy.

## Resumen de configuración

Este proceso prepara el GF 07 para comunicarse con el servidor Plaspy, de modo que la ubicación y la información básica del dispositivo aparezcan en la plataforma. Los comandos públicos del fabricante permiten configurar el APN, especificar el servidor GPRS, controlar el intervalo de reporte y cambiar el rastreador a modo GPRS.

- Configurar el APN del operador y, si aplica, las credenciales de APN para que el dispositivo establezca datos GPRS.
- Indicar el servidor Plaspy especificando el endpoint y el puerto para que el rastreador envíe reportes.
- Ajustar un intervalo de reporte para que el dispositivo envíe actualizaciones periódicas de ubicación a Plaspy.
- Cambiar el dispositivo a modo GPRS y verificar que sea visible en la plataforma Plaspy.
- Usar la contraseña predeterminada del dispositivo al enviar comandos SMS de configuración, salvo que haya sido modificada.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un rastreador GF 07 con alimentación y una tarjeta SIM compatible insertada y con servicio de datos o SMS activo.
- Conocimiento del APN del operador y, si corresponde, del nombre de usuario y contraseña del APN requerido por el proveedor.
- Acceso a un teléfono capaz de enviar SMS al rastreador para ejecutar los comandos del fabricante.
- La contraseña predeterminada del dispositivo si no ha sido cambiada (la pública mostrada a continuación es 123456).
- Acceso a las instrucciones o al manual de referencia del fabricante para el GF 07.

## Cómo se conecta este tracker a Plaspy

El GF 07 utiliza conectividad GPRS sobre GSM para enviar reportes de posición a un endpoint remoto. Cuando está configurado con los ajustes de servidor Plaspy, el rastreador abre una conexión de datos y transmite actualizaciones periódicas al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible y reportable en la plataforma.

- El rastreador establece una sesión de datos GPRS con el operador móvil usando el APN configurado.
- El dispositivo está configurado para reportar al endpoint del servidor Plaspy en el puerto 8888.
- El equipo puede configurarse para usar transporte UDP o TCP según las opciones del dispositivo y el soporte del operador.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta los datos entrantes en el puerto compartido.
- Una vez reportando, las actualizaciones de ubicación y los eventos básicos del dispositivo son visibles dentro de la plataforma Plaspy.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK-Star, normalmente mediante comandos SMS enviados desde un teléfono móvil o la documentación de configuración del proveedor.
2. Informe el APN del operador y las credenciales de APN necesarias para que la SIM pueda usar datos GPRS.
3. Introduzca el endpoint del servidor Plaspy indicando d.plaspy.com cuando las herramientas del fabricante lo permitan o la IP del servidor 54.85.159.138 al usar el comando SMS de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888, el mismo puerto que Plaspy usa para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo solicita la selección de transporte para los reportes GPRS.
6. Aplique o guarde la configuración y, si procede, reinicie el dispositivo o cámbielo al modo GPRS.
7. Valide que el dispositivo reporta a Plaspy confirmando que el rastreador aparece en su cuenta Plaspy y que se reciben actualizaciones periódicas.

## Ejemplos de comandos de configuración

El GF 07 admite configuración por SMS. El fabricante publica comandos públicos en el siguiente orden. La contraseña predeterminada del dispositivo utilizada en estos comandos es 123456. Si cambió la contraseña del dispositivo, reemplace 123456 por su contraseña actual en cada comando.

1. Restauración opcional de fábrica inicial (usar solo si necesita restablecer el rastreador a valores de fábrica)
```text
begin123456
```

2. Configurar el APN del operador (reemplazar [apn] por el APN de su operador)
```text
apn123456 [apn]
```

3. Configurar el nombre de usuario del APN si se requiere (reemplazar [apnu] por el nombre de usuario)
```text
apnuser123456 [apnu]
```

4. Configurar la contraseña del APN si se requiere (reemplazar [apnp] por la contraseña)
```text
apnpasswd123456 [apnp]
```

5. Establecer el servidor GPRS al endpoint y puerto de Plaspy (este ejemplo usa la IP y el puerto del servidor Plaspy)
```text
adminip123456 54.85.159.138 8888
```
- Nota: Cuando las herramientas del fabricante permiten un dominio en lugar de IP, puede introducir d.plaspy.com en los campos de configuración relevantes. El comando SMS público anterior usa la IP del servidor tal como aparece en los ejemplos del fabricante.

6. Establecer el intervalo de subida de posición a 60 segundos
```text
upload123456 60
```

7. Cambiar el dispositivo a modo de reporte GPRS
```text
gprs123456
```

Explicación de marcadores:
- [apn] es la cadena APN del operador móvil que la SIM necesita para usar datos.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiere.
- [apnp] es la contraseña del APN cuando el operador la requiere.
- Reemplace 123456 por su contraseña actual del dispositivo si es distinta de la predeterminada.

## Notas sobre la configuración

- La configuración vía SMS mostrada arriba es comúnmente soportada por el firmware del GF 07; sin embargo, las revisiones de firmware pueden cambiar los comandos o la sintaxis soportada.
- Elija TCP o UDP según su entorno de red y la fiabilidad del operador; Plaspy acepta cualquiera de los dos transportes en el puerto compartido.
- La contraseña predeterminada pública en los comandos es 123456; cámbiela después de la configuración inicial si sus políticas de seguridad lo requieren.
- Si hay una herramienta del fabricante o una interfaz web disponible, puede aceptar el dominio d.plaspy.com en lugar de la IP.
- Consulte siempre la documentación de TK-Star para el GF 07 para confirmar que los comandos y la sintaxis coinciden con la versión de firmware y la revisión de hardware de su dispositivo.

## Por qué usar Plaspy con esta configuración

Conectar el TK-Star GF 07 a Plaspy ofrece una forma sencilla de centralizar el reporte y la monitorización de ubicaciones para rastreadores portátiles o montados en vehículos. Usar los ajustes de servidor compartidos de Plaspy y los comandos públicos SMS permite a las organizaciones poner dispositivos en línea rápidamente y empezar a recibir actualizaciones periódicas de ubicación para obtener visibilidad operativa y seguimiento de activos.

Para saber más sobre Plaspy y cómo gestionar dispositivos a escala, visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de TK-Star https://www.tk-star.com/ ya que los comandos y el comportamiento pueden cambiar con actualizaciones de firmware y revisiones de hardware.
