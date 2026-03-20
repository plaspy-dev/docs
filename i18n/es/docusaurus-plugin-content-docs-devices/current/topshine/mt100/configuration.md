---
slug: /topshine/mt100/configuration
id: mt100-configuration
sidebar_label: Configuration
title: TopShine - MT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine MT100 para usar el dispositivo con Plaspy en seguimiento en tiempo real
keywords:
  - Configuración TopShine MT100
  - Configuración MT100
  - Configuración MT100 Plaspy
  - Configuración rastreador TopShine
  - Configuración servidor MT100
  - Configuración rastreador GPS TopShine
  - Configuración rastreador de vehículo Plaspy
  - Rastreador de flota MT100
  - Configuración GPRS MT100
  - Configuración rastreador Plaspy
---

# TopShine - Configuración del MT100

Esta página reúne la información pública sobre la configuración necesaria para usar el rastreador TopShine MT100 con la plataforma Plaspy. Incluye los pasos prácticos de configuración y los ajustes de servidor que se emplean comúnmente para que el MT100 reporte a Plaspy y pueda usarse en seguimiento en tiempo real y en el envío de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El MT100 admite configuración por SMS y métodos remotos; esta guía destaca el flujo de comandos SMS documentado para el modelo y los detalles exactos del endpoint de Plaspy que deberá usar.

## Resumen de la configuración

El objetivo de la configuración es preparar el MT100 para que se comunique de forma fiable con Plaspy, envíe posición y eventos, y aparezca en la plataforma para su monitoreo e informes. Cuando sea posible, los comandos SMS permiten programar el APN, el endpoint del servidor, el modo de transporte y los intervalos de reporte; otros instaladores usan el software del fabricante o herramientas de configuración remota según la instalación.

- Configure el APN de la red y las credenciales necesarias para que el dispositivo tenga conectividad de datos móviles.
- Apunte el MT100 al endpoint y puerto del servidor de Plaspy para que los reportes lleguen a la plataforma.
- Seleccione el tipo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Verifique la identidad del dispositivo y el IMEI para que el equipo aparezca en Plaspy con el identificador correcto.
- Valide la conectividad observando los reportes del dispositivo en Plaspy y utilizando el comando SMS de verificación del equipo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Una unidad MT100 con alimentación y el cableado y sensores externos instalados según lo requiera su instalación.
- Una SIM activa con servicio de datos y capacidad de SMS, configurada con el APN del operador.
- El IMEI del dispositivo y la contraseña de SMS del equipo si va a usar configuración por SMS; los ejemplos usan la contraseña por defecto 000000.
- Acceso a los comandos SMS del fabricante o al software oficial de configuración de TopShine.
- Una cuenta Plaspy o un método de aprovisionamiento para registrar el dispositivo una vez que reporte a la plataforma.
- Un plan de pruebas básico para confirmar actualizaciones de ubicación y reporte de eventos tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El MT100 se configura para enviar datos de posición y eventos a Plaspy apuntando su conexión GPRS/LTE al endpoint de Plaspy en el puerto compartido. Una vez programado, el dispositivo sube actualizaciones periódicas de ubicación y mensajes de eventos para que vehículos y eventos de conductor sean visibles en la plataforma.

- El rastreador reporta actualizaciones de ubicación y telemetría al endpoint d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Tras la conexión exitosa, los mensajes de identificación del conductor y de eventos se reenvían a Plaspy para alarma e informes.
- Plaspy agrega ubicación, telemetría e identificación de conductor para monitoreo en vivo y reproducción histórica.
- La identidad del dispositivo se asocia al IMEI o al identificador configurado para que la plataforma muestre y organice los datos del equipo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopShine para su unidad MT100, por ejemplo comandos SMS o la herramienta de configuración del fabricante.
2. Confirme o ingrese el APN y las credenciales del APN que solicite su operador móvil.
3. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el equipo requiere seleccionar el transporte.
5. Aplique o guarde la configuración y envíe los comandos de guardado necesarios desde la herramienta del fabricante o por SMS.
6. Reinicie o haga un ciclo de alimentación del dispositivo si las instrucciones del fabricante lo aconsejan.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo en su cuenta Plaspy y confirmando que lleguen las actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El MT100 puede configurarse por SMS usando el conjunto de comandos del fabricante. Los comandos de ejemplo a continuación usan la contraseña por defecto 000000. Sustituya los marcadores por los valores reales antes de enviar.

- Comando opcional de restauración a ajustes de fábrica (usar solo si necesita devolver la unidad a valores predeterminados)
```
W000000,990,099###
```

- Establecer el ID del dispositivo usando los primeros 14 dígitos del IMEI
```
W000000,010,{{first14_IMEI}}
```
Nota: Reemplace {{first14_IMEI}} con los primeros 14 dígitos del IMEI del equipo. El dispositivo y Plaspy utilizan identificadores basados en IMEI; asegúrese de que el valor coincida con su unidad.

- Configurar el APN del operador y el usuario y contraseña opcionales del APN
```
W000000,011,[apn]{{,apn_user,apn_pass}}
```
Ejemplos:
- Si solo se requiere el APN
```
W000000,011,[apn]
```
- Si se requiere usuario y contraseña del APN
```
W000000,011,[apn],[apnu],[apnp]
```
Explicación de marcadores:
- [apn] es el APN del operador móvil
- [apnu] es el usuario del APN si se requiere
- [apnp] es la contraseña del APN si se requiere

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```
W000000,012,54.85.159.138,8888
```
Alternativamente puede usar el dominio del servidor reemplazando la IP por d.plaspy.com si el dispositivo acepta nombres de host.

- Cambiar al modo de datos GPRS
```
W000000,013,2
```

- Establecer el intervalo de actualización de posición (valor de ejemplo 6 usado en la muestra del fabricante)
```
W000000,014,6
```

- Verificar IMEI del dispositivo (comando de consulta)
```
W000000,601
```

Envíe cada SMS desde el número autorizado si su unidad lo requiere y observe las confirmaciones por SMS del dispositivo. Mantenga la contraseña por defecto 000000 salvo que haya sido cambiada.

## Notas de configuración

- Las diferencias de firmware entre revisiones del MT100 pueden modificar la sintaxis de comandos o los parámetros disponibles; siempre revise las notas de versión de TopShine para su revisión de hardware.
- El MT100 admite configuración por SMS y configuración remota por TCP/UDP según el firmware y las herramientas del instalador; elija el método adecuado según su instalación y políticas de seguridad.
- Cuando el dispositivo requiera seleccionar transporte, escoja UDP o TCP según la confiabilidad de la red y las restricciones del operador; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Asegúrese de que las credenciales del APN sean correctas antes de cambiar los ajustes del servidor para evitar pérdida de conectividad; pruebe la conectividad de datos por separado si es posible.
- Use el comando de verificación del IMEI para confirmar que está configurando el equipo correcto y para construir cualquier identificador de dispositivo necesario en su flujo de aprovisionamiento.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine MT100 para reportar a Plaspy ofrece a las flotas ubicación en tiempo real, identificación de conductor y reporte de eventos consolidados en una sola plataforma. Para operaciones que requieren responsabilidad del conductor, controles antirrobo y análisis operativos, combinar las capacidades del MT100 con el endpoint agnóstico de dispositivos de Plaspy simplifica el despliegue y el monitoreo continuo.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el MT100 visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guías de instalación, confirme los detalles en el sitio oficial de TopShine https://www.gztopshine.com ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
