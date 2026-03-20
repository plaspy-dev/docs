---
slug: /xirgo/xt_5000/configuration
id: xt_5000-configuration
sidebar_label: Configuration
title: Xirgo - XT-5000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT-5000 con Plaspy, con ajustes de servidor, comandos SMS y flujo de trabajo
keywords:
  - Configuración Xirgo XT-5000
  - Configuración XT-5000 Plaspy
  - Configuración rastreador Xirgo
  - Configuración servidor XT-5000
  - Configuración plataforma GPS XT-5000
  - Guía configuración dispositivo Xirgo
  - Configuración rastreador GPS Plaspy
  - Configuración SMS XT-5000
  - Rastreo de activos XT-5000
  - Rastreo vehicular Xirgo
---

# Xirgo - Configuración del XT-5000

Esta página documenta el contexto público de configuración para usar el rastreador Xirgo XT-5000 con Plaspy. Se centra en los ajustes prácticos y el flujo de trabajo necesarios para que el XT-5000 se comunique con la plataforma Plaspy. La descripción del XT-5000 en esta guía se basa en la especificación pública del dispositivo: un rastreador robusto y de bajo consumo con capacidad celular integrada, opciones de detección de movimiento y autonomía extendida adecuada para despliegues prolongados.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas del instalador y el tipo de despliegue. El XT-5000 admite configuración por SMS como se muestra en los comandos públicos del fabricante abajo; usted debe verificar las instrucciones específicas del dispositivo con la documentación de Xirgo cuando sea necesario.

## Resumen de la configuración

Configurar el XT-5000 para Plaspy prepara el dispositivo para conectarse al endpoint central de Plaspy y reportar ubicación y estado, de modo que los activos sean visibles en la plataforma. La configuración pública comúnmente implica establecer el APN del operador para datos celulares, apuntar el dispositivo al servidor de Plaspy y confirmar los ajustes de transporte.

- Configurar el APN del operador para que el dispositivo pueda establecer una sesión de datos GPRS.
- Indicar la dirección y el puerto del servidor GPRS para apuntar el rastreador a Plaspy.
- Seleccionar el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Validar la conectividad para que el rastreador pueda enviar reportes periódicos de ubicación y estado.
- Confirmar que el dispositivo aparece en Plaspy y que la detección automática de protocolo ha emparejado el rastreador correctamente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el XT-5000. Estos son los valores públicos necesarios para que el dispositivo se comunique con Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según se requiera por el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma aceptará el protocolo del dispositivo una vez que el rastreador apunte al servidor y puerto compartidos

## Requisitos previos habituales

- Asegúrese de que el XT-5000 tenga alimentación y nivel de batería adecuados para la configuración y las pruebas.
- Una SIM celular válida provisionada para datos con los detalles correctos del APN del operador.
- Acceso al método de configuración oficial de Xirgo, como comandos SMS o la herramienta del fabricante según sea necesario.
- IMEI o número de serie del dispositivo disponible para registro y resolución de problemas.
- Un entorno de prueba básico donde el rastreador pueda obtener soluciones GPS y registrarse en la red celular durante la verificación.
- Saber si el firmware del dispositivo acepta nombres de dominio o requiere una dirección IP en el campo del servidor.

## Cómo se conecta este rastreador a Plaspy

El XT-5000 se configura para enviar sus datos de ubicación y estado al endpoint y puerto compartidos del servidor de Plaspy. Una vez que se aplican el APN y los ajustes de servidor, el dispositivo intentará abrir una sesión GPRS y transmitir reportes que Plaspy recibe y asocia con el dispositivo mediante la detección automática de protocolo.

- El rastreador inicia una sesión de datos usando el APN configurado y la red celular.
- Envía paquetes GPRS a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del dispositivo y analiza los mensajes entrantes.
- Los reportes periódicos proveen ubicación, estado y actualizaciones de salud a la plataforma Plaspy.
- Una configuración exitosa permite supervisión operativa y visibilidad en Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración Xirgo o al software para el XT-5000 (por ejemplo comandos SMS o la herramienta del proveedor).
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para que coincida con el puerto compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure el APN del operador para que el rastreador pueda usar datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si este requiere reinicio para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad del dispositivo y que Plaspy haya detectado automáticamente el protocolo del rastreador.

## Ejemplos de comandos de configuración

El XT-5000 puede configurarse usando comandos SMS. Los siguientes comandos públicos están en la documentación del fabricante y deben enviarse como mensajes SMS al dispositivo. Preserve el orden mostrado por el fabricante cuando sea requerido.

- Establecer el APN del operador (reemplazar los marcadores con los valores del operador)
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explicación de los marcadores:
- [apnu] — Nombre de usuario del APN si el operador lo requiere (dejar vacío si no se usa)
- [apnp] — Contraseña del APN si el operador la requiere (dejar vacío si no se usa)
- [apn]  — Nombre del APN del operador móvil

- Establecer el servidor GPRS para apuntar a Plaspy (el comando público incluye puerto e IP)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas:
- El comando anterior configura el servidor de Plaspy usando el puerto 8888 y la IP 54.85.159.138. Si el dispositivo acepta nombres de dominio, alternativamente puede ingresar d.plaspy.com en la herramienta del fabricante o en el campo de servidor donde sea compatible.
- Los parámetros numéricos finales forman parte del formato del comando del dispositivo mantenido por el fabricante. Manténgalos tal como aparecen, a menos que la documentación de Xirgo indique lo contrario.

## Notas de configuración

- Las revisiones de firmware y hardware pueden afectar los comandos disponibles y la sintaxis exacta por SMS o en la herramienta. Revise siempre las notas de la versión de Xirgo para su versión de firmware.
- Algunas instalaciones prefieren ingresar d.plaspy.com; otras requieren la IP numérica del servidor. Use lo que el dispositivo acepte.
- Elija UDP o TCP según la orientación del instalador; Plaspy soporta ambos transportes, pero el comportamiento del dispositivo puede variar según el firmware.
- La configuración por SMS está soportada como se muestra, pero las herramientas de configuración del proveedor o conexiones seriales también pueden estar disponibles según el modelo XT-5000 y el flujo de trabajo del instalador.
- Confirme las credenciales del APN con el operador celular antes de enviar comandos de configuración.

## Por qué usar Plaspy con esta configuración

Usar el XT-5000 con Plaspy ofrece un camino sencillo hacia la visibilidad y supervisión operativa a largo plazo de activos remotos. El diseño de bajo consumo y la construcción robusta del XT-5000 lo hacen adecuado para despliegues donde la duración de la batería y la resistencia son importantes, mientras que el endpoint de servidor de Plaspy y la detección automática de protocolos simplifican la integración en el backend.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y las instrucciones del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles de instalación y el comportamiento del firmware más recientes en el sitio web de Xirgo https://xirgo.com/.
