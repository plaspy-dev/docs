---
slug: /xexun/tk_103/configuration
id: tk_103-configuration
sidebar_label: Configuration
title: Xexun - TK-103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Xexun TK-103 con datos de servidor Plaspy y comandos SMS de configuración
keywords:
  - Configuración Xexun TK-103
  - Instalación Xexun TK-103
  - Configuración servidor TK-103
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración GPS Xexun
  - Comandos SMS TK-103
  - Ajustes servidor GPRS
  - Configuración seguimiento de flotas
---

# Xexun - TK-103 Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador Xexun TK-103 con Plaspy. Reúne los valores de servidor compartidos, orientación práctica de instalación y ejemplos de comandos SMS que se usan comúnmente para apuntar un TK-103 a Plaspy y permitir que el equipo reporte ubicación y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que aparecen a continuación reflejan instrucciones públicas habituales para dispositivos del estilo TK-103 y deben combinarse con la documentación del fabricante para los pasos más actuales y específicos del dispositivo.

## Resumen de la configuración

El objetivo de este proceso es preparar un TK-103 para comunicarse de forma fiable con la plataforma Plaspy, verificar la conectividad y habilitar la visibilidad del dispositivo y reporte de eventos dentro de su cuenta Plaspy. Los pasos públicos suelen configurar el APN del operador, establecer el endpoint del servidor GPRS y activar el reporte periódico.

- Configure el APN del operador móvil y las credenciales APN opcionales que requiera la SIM
- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy
- Seleccione el tipo de transporte si el dispositivo lo requiere y confirme que los datos GPRS estén activos
- Defina el intervalo de reporte y el modo GPRS para permitir actualizaciones regulares a Plaspy
- Verifique que el dispositivo aparezca en Plaspy y confirme el envío de eventos y la visibilidad de geolocalización

## Configuración del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 cuando el dispositivo requiera selección
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, por lo que el valor del puerto es compartido entre rastreadores

## Requisitos previos habituales

- Una unidad TK-103 alimentada y accesible para recibir comandos SMS de configuración
- Una tarjeta SIM operativa con datos habilitados e información APN correcta para el operador móvil
- La contraseña del dispositivo o el código de administrador para enviar comandos SMS de configuración (se muestra abajo la contraseña por defecto de ejemplo)
- Capacidad para enviar y recibir SMS con el número del rastreador desde un teléfono o herramienta de configuración
- Acceso a Plaspy para verificar que el dispositivo se registre y reporte después de la configuración
- Documentación del fabricante o recursos de soporte para comandos específicos de firmware y comportamiento

## Cómo se conecta este rastreador a Plaspy

Cuando se configura, el TK-103 utiliza su conexión GPRS para enviar actualizaciones de ubicación y eventos a Plaspy. El dispositivo se orienta al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir telemetría, mostrar la ubicación en mapas y procesar alarmas.

- El rastreador envía datos de posición y movimiento a d.plaspy.com en el puerto configurado
- Las notificaciones de eventos y alarmas del dispositivo se reenviarán a Plaspy para su monitoreo
- Las actualizaciones periódicas mantienen la visibilidad en la plataforma Plaspy
- Plaspy identifica automáticamente el protocolo del rastreador para aceptar los datos enviados por el equipo
- Use el ajuste de puerto compartido para estandarizar la configuración en múltiples rastreadores de una flota

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el TK-103, comúnmente comandos SMS o software del proveedor, y confirme la contraseña del dispositivo.
2. Configure el APN del operador móvil usando la interfaz de comandos del fabricante con el valor APN correcto para la SIM.
3. Introduzca el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la configuración.
5. Aplique o guarde la configuración y, si es necesario, reinicie el rastreador para aplicar los cambios de red y GPRS.
6. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y las últimas ubicaciones en su cuenta Plaspy.
7. Si no aparecen actualizaciones, revise las credenciales APN, el modo GPRS y confirme la conectividad de datos de la SIM; repita la configuración según sea necesario.

## Comandos de configuración de ejemplo

El TK-103 puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos son ejemplos públicos y se muestran en el orden que a menudo se utiliza. La configuración de ejemplo usa la contraseña del dispositivo 123456, que es el valor de fábrica de muchas unidades. Conserve los marcadores de posición al sustituirlos por su APN y credenciales del operador.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar a valores predeterminados)
```text
begin123456
```

- Establecer el APN del operador (reemplazar [apn] con el APN de su operador)
```text
apn123456 [apn]
```

- Establecer el nombre de usuario APN si es necesario (reemplazar [apnu] con el usuario APN)
```text
apnuser123456 [apnu]
```

- Establecer la contraseña APN si es necesario (reemplazar [apnp] con la contraseña APN)
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS a Plaspy usando la IP y el puerto del servidor
```text
adminip123456 54.85.159.138 8888
```

- Establecer el modo GPRS (comando específico del dispositivo para modo GPRS)
```text
gprsmode123456
```

- Configurar el intervalo de reporte a 60 segundos como ejemplo
```text
t060s***n123456
```

Notas sobre marcadores de posición y contraseña
- [apn] es la cadena APN del operador móvil necesaria para datos GPRS
- [apnu] y [apnp] son campos opcionales de usuario y contraseña APN si su operador los requiere
- Reemplace 123456 por la contraseña del dispositivo si se ha cambiado del valor de fábrica
- Envíe cada comando como SMS al rastreador y espere un breve tiempo para que el dispositivo aplique la configuración antes de enviar el siguiente comando

## Notas de configuración

- La configuración por SMS es de uso común en dispositivos TK-103; asegúrese de que su teléfono pueda enviar SMS al número del rastreador y que el equipo esté encendido.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de los comandos o las opciones disponibles; siempre verifique con la documentación oficial de Xexun.
- La elección entre UDP y TCP puede afectar las características de entrega; pruebe ambos si experimenta problemas de conectividad, teniendo en cuenta que Plaspy soporta ambos transportes en el puerto 8888.
- Use el dominio o la IP del servidor Plaspy tal como se muestra arriba; si utiliza el dominio d.plaspy.com, el dispositivo lo resolverá a través de la red si lo soporta.
- Confirme las credenciales APN con su operador móvil antes de configurar el dispositivo para evitar fallos de conectividad de datos.

## Por qué usar Plaspy con esta configuración

Configurar un TK-103 para que reporte a Plaspy proporciona visibilidad centralizada y monitoreo operativo para flotas o vehículos individuales. Con el rastreador apuntando a Plaspy, las organizaciones pueden recibir actualizaciones oportunas de ubicación, monitorear eventos de alarma y mantener una vista consolidada de los activos para mejorar la seguridad y la toma de decisiones operativas.

Conozca más sobre Plaspy y cómo soporta rastreadores GPS en https://www.plaspy.com. Para comandos específicos del dispositivo, notas de versiones de firmware y las instrucciones de configuración más actualizadas, verifique los detalles con el fabricante en https://www.xexun.com/ ya que las especificaciones y los métodos de configuración del proveedor pueden cambiar con el tiempo.
