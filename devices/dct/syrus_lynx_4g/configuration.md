---
slug: /dct/syrus_lynx_4g/configuration
id: syrus_lynx_4g-configuration
sidebar_label: Configuration
title: DCT - Syrus Lynx 4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus Lynx 4G with Plaspy server settings and example Syrus Desk script
keywords:
  - DCT Syrus Lynx 4G configuration
  - Syrus Lynx 4G setup Plaspy
  - Syrus Lynx 4G server configuration
  - Syrus tracking software configuration
  - Syrus GPS platform setup
  - Plaspy tracker configuration
  - vehicle GPS tracker configuration
  - fleet management tracker setup
  - Syrus configuration guide
  - Syrus Desk script example
---

# DCT - Syrus Lynx 4G Configuration

This page covers the public configuration context for using the DCT Syrus Lynx 4G tracker with Plaspy. It focuses on the practical server settings, typical prerequisites, and a Syrus Desk script example that prepares the device to report to Plaspy's cloud backend for real time tracking and alerting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example content below uses a Syrus SB script excerpt that can be loaded with Syrus Desk and includes APN placeholders and the server endpoint that Plaspy requires.

## Configuration Overview

Preparing a Syrus Lynx 4G for use with Plaspy means configuring the device to reach Plaspy's remote AVL endpoint, setting any required APN credentials, and enabling the reporting signals you need for mapping and alerts. The included example script is a starting point you can load via Syrus Desk, then adapt to your APN and reporting needs.

- Point the device to the Plaspy server endpoint so GNSS and telemetry are forwarded to Plaspy for monitoring.
- Configure cellular APN, username, and password placeholders as required by your SIM operator.
- Enable time or event based reporting signals so the platform receives periodic location and alert updates.
- Save and apply configuration using Syrus Desk or the manufacturer tool and verify device connectivity in Plaspy.
- Validate events and telemetry appear in Plaspy so alerts and remote commands can be used.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol for incoming device connections

## Typical Requirements Before Setup

- Access to the device and an official DCT Syrus configuration tool such as Syrus Desk to load scripts or templates.
- Active SIM card provisioned for data with the correct APN settings for your operator.
- Device powered and installed or connected to a test bench with stable power for configuration.
- Device IMEI and any registration information available for troubleshooting and validation.
- Awareness of the device firmware version and any vendor tooling requirements that affect script loading.
- Network connectivity from the device to public internet so it can reach d.plaspy.com or the fallback IP address.

## How This Tracker Connects to Plaspy

The Syrus Lynx 4G sends GNSS position and telemetry over its cellular link to Plaspy's shared server endpoint and port so the platform can ingest location, events, and status updates. Plaspy receives the device stream and matches the protocol automatically for mapping, alerts, and remote control actions.

- The device is configured to forward AVL traffic to d.plaspy.com on port 8888.
- Plaspy accepts connections over UDP or TCP and detects the tracker protocol automatically.
- Time based or event driven signals from the tracker create position and status updates in Plaspy.
- Alarm conditions such as tamper or tow events are forwarded to Plaspy for immediate alerting.
- Once reporting is validated, Plaspy can show live location, historical tracks, and trigger rules for notifications or remote actions.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Syrus Desk.  
2. Create or edit a Syrus SB script or template and include the Plaspy server address d.plaspy.com or, if needed for testing, the server IP 54.85.159.138.  
3. Set the destination port to 8888 and select UDP or TCP if the device requires explicit transport selection.  
4. Fill APN placeholders with your SIM operator APN, username, and password if required.  
5. Apply or save the configuration to the device using Syrus Desk and ensure the file is uploaded in the correct format.  
6. Restart the device if the manufacturer documentation or Syrus Desk indicates a reboot is required.  
7. Validate that the device reports to Plaspy by observing incoming telemetry and location data in your Plaspy interface.

## Example Configuration Commands

You can copy and paste the following script into a new text file, save it with a .tmf extension, and load it with Syrus Desk. The script example preserves the order of commands and uses placeholders for APN credentials. The script comments are part of the example and describe each block.

> Note: The line that points to Plaspy is explicitly set to d.plaspy.com with port 8888. Plaspy supports UDP or TCP on this port and will detect the tracker protocol automatically.

```text
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

- [apn] — placeholder for your SIM operator APN name.  
- [apnu] — placeholder for APN username if required by your operator.  
- [apnp] — placeholder for APN password if required by your operator.  
- The command >SRT;CONFIG\< is included in the script to delete previous configuration as shown in the example comments; treat erase steps as optional or initial only when you intend to clear prior settings.

## Configuration Notes

- Syrus Desk is the recommended manufacturer tool for loading SB script templates such as the .tmf example above; follow Syrus Desk guidance for file formatting and upload steps.  
- Behavior and available SB commands may vary by firmware version and hardware revision; always confirm command syntax against the device firmware documentation.  
- Choose UDP or TCP based on network characteristics and server expectations; Plaspy supports both transports on port 8888 and will detect the protocol automatically.  
- Keep APN credentials and SIM provisioning details ready before applying the configuration; incorrect APN values will prevent the device from registering to the network.  
- When testing, you may use either d.plaspy.com or the provided server IP for troubleshooting, but production configurations should use the domain to follow standard DNS routing.

## Why Use Plaspy with This Configuration

Configuring the Syrus Lynx 4G to report to Plaspy gives fleet operators centralized visibility into vehicle location, alerts, and telematics. The shared Plaspy server settings simplify onboarding because the platform uses the same port for all supported devices and automatically detects tracker protocols, reducing per device customization and accelerating large scale rollouts.

For more details about Plaspy capabilities and to explore platform features, learn more at https://www.plaspy.com. For device specific commands, firmware release notes, and Syrus Desk tool documentation, verify the latest information on the manufacturer site https://www.digitalcomtech.com/ as device configuration methods and firmware behavior can change over time.
