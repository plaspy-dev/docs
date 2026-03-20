---
slug: /gotop/l17/configuration
id: l17-configuration
sidebar_label: Configuration
title: GOTOP - L17 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar la pulsera GPS GOTOP L17 y su compatibilidad con los ajustes de servidor compartido de Plaspy
keywords:
  - Configuración GOTOP L17
  - Ajuste GOTOP L17
  - Configuración de servidor L17
  - Configuración rastreador Plaspy
  - Integración wearable Plaspy
  - Configuración rastreador GPS L17
  - Configuración dispositivo seguridad personal
  - Configuración plataforma GPS Plaspy
  - Configuración telemetría salud
  - Compatibilidad L17 Plaspy
---

# GOTOP - Configuración L17

Esta página describe el contexto público de configuración para usar la pulsera GPS inteligente GOTOP L17 con Plaspy. Se enfoca en los valores y pasos prácticos necesarios para apuntar el equipo a Plaspy y permitir que el L17 entregue ubicación GNSS y telemetría a la plataforma Plaspy para alertas, historial e informes.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el L17 pueden variar según la versión de firmware, la variante de hardware, el método de instalación y las herramientas de configuración GOTOP que utilice, por lo que esta página se concentra en los valores específicos de Plaspy y el flujo general que usted debe seguir antes de verificar los comandos y menús concretos en la documentación de GOTOP.

## Resumen de la configuración

El objetivo es preparar el L17 para que se comunique de forma fiable con Plaspy y así la ubicación, las alertas SOS y la telemetría de sensores aparezcan en el panel de Plaspy. Esto implica ingresar el endpoint y puerto del servidor Plaspy, seleccionar el transporte si fuera necesario y comprobar que el dispositivo reporte correctamente.

- Configure el equipo para enviar fixes GNSS y telemetría al endpoint de Plaspy.
- Verifique la conectividad celular y que el dispositivo pueda alcanzar Plaspy desde el campo.
- Seleccione el transporte apropiado (UDP o TCP) cuando el equipo lo requiera.
- Guarde y aplique los ajustes, luego valide que posiciones y eventos lleguen a Plaspy.
- Confirme que los eventos SOS y la telemetría se entreguen para que Plaspy genere alertas e historial.

## Ajustes del servidor de Plaspy

Use los siguientes valores públicos de Plaspy al configurar el GOTOP L17 para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son el endpoint compartido que Plaspy proporciona para los rastreadores compatibles, incluido el L17.

## Requisitos previos habituales

- Asegúrese de que el L17 tenga batería y esté encendido o conectado a carga durante la configuración.
- Inserte y active una nano SIM compatible o configure eSIM según las instrucciones de GOTOP si requiere datos celulares.
- Tenga acceso al método oficial de configuración GOTOP, como la app del fabricante o la herramienta web referida en el manual del producto.
- Disponga de los detalles de su cuenta o proyecto Plaspy para validar el reporte del dispositivo en la plataforma.
- Verifique que el firmware del dispositivo esté en un nivel compatible según la documentación de GOTOP antes de aplicar los ajustes del servidor.
- Mantenga a mano la documentación del fabricante o las herramientas del proveedor para menús específicos, formatos de comandos SMS o flujos de trabajo en la app.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el L17 envía fixes GNSS y telemetría por su enlace celular al endpoint y puerto compartido de Plaspy. Plaspy recibe ubicación, eventos SOS y telemetría para procesarlos en mapas en vivo, alertas e historial.

- El dispositivo reporta fixes GNSS y telemetría a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según el firmware del dispositivo o la opción de configuración.
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador una vez que el dispositivo alcanza el servidor.
- Los eventos del botón SOS y las actualizaciones de estado se reenvían a Plaspy para que puedan generarse alertas.
- La telemetría como frecuencia cardiaca, SpO2, temperatura y datos de actividad se entrega junto con la ubicación cuando está habilitada.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración GOTOP para el L17 (app del fabricante, portal web o herramienta del proveedor).
2. Ubique la pantalla de servidor o APN/configuración de servidor donde se ingresan los ajustes remotos.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto del servidor exactamente en 8888 tal como lo proporciona Plaspy.
5. Elija UDP o TCP si el dispositivo solicita selección de transporte; Plaspy soporta ambos en el mismo puerto.
6. Aplique o guarde la configuración y envíe cualquier comando de confirmación requerido desde la herramienta del fabricante.
7. Reinicie el dispositivo si la herramienta de configuración GOTOP o el firmware lo requieren.
8. Valide que el L17 reporte correctamente a Plaspy revisando la posición del dispositivo, la telemetría o los registros de eventos en su proyecto Plaspy.

## Ejemplos de comandos de configuración

Los comandos e interfaces exactos dependen del firmware GOTOP y de la herramienta de configuración que utilice. Dado que los métodos de aprovisionamiento del fabricante varían, consulte el manual del GOTOP L17 o la app del proveedor para la sintaxis precisa de comandos o las rutas de menú. En términos generales, ingresará los valores del servidor Plaspy indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) en los ajustes de servidor del dispositivo y seleccionará UDP o TCP si se solicita.

Si su herramienta de aprovisionamiento GOTOP admite comandos de texto o SMS directos, utilice la documentación del fabricante para formatear los comandos e incluya el dominio o IP del servidor Plaspy y el puerto 8888 según sea necesario. Conserve siempre los marcadores de posición del manual GOTOP, como APN o valores de acceso, cuando estén presentes.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús, la sintaxis de comandos y las opciones de transporte disponibles; verifique la versión de firmware de su dispositivo primero.
- La elección TCP vs UDP puede ofrecerse en el dispositivo; Plaspy admite ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- APN y credenciales celulares siguen siendo específicos del fabricante y del operador; complete los campos APN con los datos de su proveedor de SIM cuando sea necesario.
- Use la app oficial GOTOP o el portal de configuración para el aprovisionamiento en el dispositivo cuando esté disponible, para evitar errores de comando.
- Confirme el reporte de SOS y telemetría después de la configuración para que Plaspy pueda registrar alarmas y datos históricos correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP L17 para que reporte a Plaspy ofrece una forma unificada de monitorear ubicación de wearables, alertas SOS y telemetría de salud desde una sola plataforma. Para organizaciones y familias que requieren visibilidad continua y respuesta rápida, usar Plaspy con el L17 permite alertas oportunas, informes históricos y monitoreo integrado de dispositivos de seguridad personal.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los detalles de configuración del fabricante, el comportamiento del firmware y los menús del dispositivo pueden cambiar con el tiempo, por lo que debe verificar las instrucciones de aprovisionamiento y configuración específicas del GOTOP en https://www.gotop.cc/.
