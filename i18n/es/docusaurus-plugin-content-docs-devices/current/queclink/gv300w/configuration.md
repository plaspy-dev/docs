---
slug: /queclink/gv300w/configuration
id: gv300w-configuration
sidebar_label: Configuration
title: QuecLink - GV300W Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar QuecLink GV300W y conectarlo al servidor de Plaspy
keywords:
  - configuración QuecLink GV300W
  - configuración GV300W
  - configuración de servidor QuecLink
  - configuración GV300W Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreador de vehículos
  - configuración SMS GV300W
  - ajustes GPRS QuecLink
  - configuración seguimiento de flotas
  - ajustes de servidor para rastreadores GPS
---

# QuecLink - Configuración GV300W

Esta página ofrece contexto público de configuración y orientación práctica para usar el rastreador QuecLink GV300W con Plaspy. Se enfoca en los parámetros públicos del servidor de Plaspy que deberá aplicar al dispositivo y en los pasos comunes para verificar la conectividad. El contenido se basa en los comandos SMS tipo del fabricante cuando están disponibles y destaca los valores que Plaspy espera para una integración inmediata.

Plaspy emplea un endpoint y un puerto compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador para analizar los datos entrantes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor, por lo que use esta guía junto con la documentación oficial de QuecLink y las herramientas de su proveedor.

## Resumen de la configuración

El objetivo es preparar el GV300W para que entregue ubicación y telemetría a Plaspy de forma confiable. Para este modelo, el proceso público de configuración normalmente utiliza comandos SMS o la herramienta de configuración del fabricante para establecer el APN y los parámetros del servidor, y para ajustar intervalos de reporte y entradas.

- Configure el APN y los parámetros GPRS del equipo para que pueda usar datos móviles en conexiones TCP o UDP.
- Apunte el rastreador al endpoint de Plaspy para que los mensajes se entreguen a la plataforma.
- Configure intervalos de reporte y comportamiento de entradas para que Plaspy reciba los eventos y la telemetría que necesita.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de aplicar los ajustes.
- Opcionalmente, realice un restablecimiento de fábrica antes de un despliegue masivo para asegurar un estado inicial conocido.

## Parámetros del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los parámetros públicos del endpoint de Plaspy que deberá usar al configurar el GV300W. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y tratará de identificar el protocolo automáticamente.

## Requisitos típicos antes de comenzar

- Una unidad GV300W alimentada y accesible con su método de configuración disponible (SMS o herramienta del fabricante).
- Una tarjeta SIM activa instalada con un plan de datos funcional y los detalles APN correctos para el operador.
- Conocimiento de la contraseña del dispositivo (los comandos de ejemplo usan la contraseña por defecto queclink).
- Acceso a la capacidad de enviar SMS o al software oficial de configuración de QuecLink para aprovisionamiento a gran escala.
- Un plan de pruebas para cobertura e intervalos de reporte que evite uso de datos excesivo durante la validación.

## Cómo se conecta este rastreador a Plaspy

El GV300W se configura para enviar reportes periódicos y por evento al endpoint y puerto compartidos de Plaspy usando el transporte seleccionado. Plaspy recibe esos paquetes y analiza mensajes GNSS, E/S y de eventos para mostrarlos y reportarlos en la plataforma.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 y usa el puerto 8888 para subir datos.
- Puede elegir transporte UDP o TCP en el dispositivo; Plaspy soporta ambos y detecta automáticamente el protocolo usado.
- Los intervalos de reporte y los mensajes disparados por entradas hacen que el rastreador envíe actualizaciones que aparecen en la línea de tiempo de Plaspy.
- El APN y los ajustes GPRS deben ser correctos para que el GV300W pueda abrir conexiones de datos hacia Plaspy.
- El SMS puede usarse para comandos de configuración inicial cuando el dispositivo y el flujo del instalador lo permiten.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de QuecLink para el GV300W, ya sea mediante comandos SMS o la herramienta del proveedor.
2. Ingrese el endpoint del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto de destino en 8888.
4. Elija transporte UDP o TCP si el equipo requiere selección explícita.
5. Configure el APN y las credenciales del APN que solicite su operador móvil.
6. Aplique o guarde la configuración y realice cualquier reinicio requerido del equipo.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del equipo y los mensajes recientes en la plataforma.

Si va a aprovisionar varias unidades, realice estos pasos en un solo equipo primero y confirme el reporte a Plaspy antes del despliegue masivo.

## Comandos de configuración de ejemplo

El GV300W puede configurarse vía comandos SMS. Los siguientes comandos de ejemplo públicos figuran en la configuración tipo del fabricante. La configuración de muestra usa la contraseña por defecto queclink. Preserve los marcadores de posición exactamente como se muestran. Envíe cada comando como SMS desde un número autorizado o mediante su herramienta de aprovisionamiento en el orden indicado cuando el orden sea importante.

- Restauración de fábrica inicial opcional (usar solo cuando necesite restablecer a valores de fábrica):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Establecer la zona horaria a UTC menos 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador y las credenciales opcionales (reemplazar los marcadores con los valores de su operador):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explicación de los marcadores de posición
- [apn] es el Access Point Name de la red móvil para su SIM
- [apnu] es el nombre de usuario del APN cuando lo requiera el operador
- [apnp] es la contraseña del APN cuando lo requiera el operador

- Configurar el servidor GPRS para reportar a Plaspy. Este ejemplo apunta el dispositivo a d.plaspy.com y a la IP 54.85.159.138 usando el puerto 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Establecer el intervalo de actualización de posición a 60 segundos:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Habilitar notificación del botón SOS en la entrada 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use los comandos anteriores como ejemplos. Su conjunto exacto de comandos o parámetros adicionales puede variar según la revisión de firmware y la herramienta de aprovisionamiento. Al usar aprovisionamiento por SMS a escala, considere automatización segura y pasos de validación.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los campos disponibles. Verifique los comandos con la versión de firmware del GV300W que está usando.
- La provisión por SMS se muestra porque la configuración pública del modelo contiene ejemplos por SMS. Muchas instalaciones usan herramientas de configuración en cola o aprovisionamiento por USB/serial como alternativa.
- Elija TCP o UDP según su preferencia operacional y las características de la red; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, así que asegúrese de usar ese puerto de manera consistente en su flota.
- Mantenga la contraseña del dispositivo segura y, si es posible, cambie las credenciales por defecto después del aprovisionamiento para evitar cambios no autorizados.

## Por qué usar Plaspy con esta configuración

Configurar el GV300W para que reporte a Plaspy ofrece una vía clara hacia visibilidad en tiempo real, notificaciones de eventos e informes operativos para flotas y activos. Con el dispositivo enviando telemetría GNSS y de E/S al endpoint compartido de Plaspy, los gestores de flota pueden rastrear ubicación, monitorear encendido y alarmas e integrar datos de sensores auxiliares para obtener insights telemáticos más completos.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los comandos específicos del dispositivo, el comportamiento del firmware y los métodos de aprovisionamiento en el sitio oficial de QuecLink https://www.queclink.com/ ya que los detalles de configuración del fabricante y las funciones de firmware pueden cambiar con el tiempo.
