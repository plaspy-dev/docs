---
slug: /topfly/torchx_310/configuration
id: torchx_310-configuration
sidebar_label: Configuration
title: TopFly - TorchX 310 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect a TopFly TorchX 310 to Plaspy with shared server settings and SMS setup examples
keywords:
  - TopFly TorchX 310 configuration
  - TopFly TorchX 310 setup
  - TopFly GPS tracker configuration
  - Plaspy device configuration
  - TorchX 310 Plaspy setup
  - OBD II tracker configuration
  - fleet tracking setup
  - GPS tracker SMS commands
  - device server settings
  - vehicle telematics configuration
---

# TopFly - TorchX 310 Configuration

This page documents the public configuration context for using the TopFly TorchX 310 with Plaspy. It summarizes the practical settings and sample SMS commands that are commonly used to point the device at Plaspy and validate connectivity. Use this as an operational guide and combine it with the device manufacturer documentation when performing an installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TorchX 310 supports SMS and GPRS style configuration commands in the field and can be prepared to report telemetry to Plaspy using the shared server endpoint and port shown below.

## Configuration Overview

The goal of configuration is to prepare the TorchX 310 so it reliably communicates GNSS and CAN bus telemetry to Plaspy and appears in your fleet management instance. Typical configuration sets the operator APN, the Plaspy server endpoint, and a reporting interval so the device forwards location and vehicle data to the platform.

- Configure network access and APN so the device can use LTE Cat‑M1 or fallback networks for data.
- Set the Plaspy server endpoint so the tracker sends GPRS reports to the correct destination.
- Define an appropriate reporting interval to balance data timeliness and network usage.
- Validate device connectivity and verify that Plaspy receives initial events and telemetry.
- Use the device SMS commands or the official TopFly configuration tool as provided by the manufacturer.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint details to use when configuring the TorchX 310 for GPRS reporting.

## Typical Requirements Before Setup

- Device is installed and powered in the vehicle OBD II port or connected per the installer guide.
- Active SIM card with data and SMS enabled and the correct APN credentials for the operator.
- Access to the device SMS phone number or to the TopFly configuration tool that supports the TorchX 310.
- Knowledge of the device password used for SMS configuration (sample default password provided below is 0000).
- Reasonable cellular and GNSS coverage at the installation location to validate connectivity.

## How This Tracker Connects to Plaspy

The TorchX 310 is configured to report GNSS position and vehicle CAN telemetry to the shared Plaspy endpoint and port so the platform can ingest location, VIN, odometer, DTCs and other telemetry. Plaspy automatically detects the tracker protocol so the device can use a supported transport and the platform will process messages appropriately.

- The device sends location and CAN derived telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Reporting intervals determine how frequently position and status packets are forwarded to Plaspy.
- Buffered points stored during network loss are forwarded to Plaspy when connectivity resumes.
- The tracker can use either UDP or TCP transport to communicate with Plaspy on the shared port.
- Plaspy ingests the telemetry for live maps, reports and alert workflows once messages arrive.

## Common Configuration Workflow

1. Access the official TopFly configuration method or software, or use SMS commands if supported by the device firmware.  
2. Enter the Plaspy server address either as d.plaspy.com or as the server IP 54.85.159.138 in the device configuration.  
3. Set the server port to 8888; remember that Plaspy uses the same port for all devices.  
4. Choose UDP or TCP if the device requires an explicit transport selection.  
5. Configure the APN and any required APN user and password values for the SIM.  
6. Apply or save the configuration and restart the device if required by the firmware.  
7. Validate that the device reports to Plaspy by checking incoming events and location updates in your Plaspy instance.

If you prefer SMS based setup, follow the TopFly SMS command format supported by the TorchX 310 to perform the same server and APN settings (examples below).

## Example Configuration Commands

The TorchX 310 supports SMS configuration commands. The sample below uses the device default password 0000. Replace placeholders with your operator values where required.

1. Set the time zone to UTC 0
```
GMT,0000,0#
```

2. Set the operator APN. Replace the placeholders as follows: {{apn}} for the APN name, {{apnu}} for APN username if required, and {{apnp}} for APN password if required.
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

3. Set the GPRS server to the Plaspy server IP and port. Plaspy also accepts the server domain d.plaspy.com if preferred.
```
IP,0000,54.85.159.138 8888#
```

4. Set the reporting interval to 60 seconds. The TIMER format and allowed ranges depend on firmware.
```
TIMER,0000,60:60:0:0#
```

Notes on the commands above:
- The sample default SMS password shown is 0000. Confirm and use the device password that applies to your unit.
- Preserve the exact format and trailing delimiters when sending SMS commands to the device.
- If you prefer to use the server domain instead of the IP address, provide d.plaspy.com where the server address is required.

## Configuration Notes

- Manufacturer firmware versions and regional device variants can change the exact command syntax and supported parameters; consult TopFly documentation for firmware specific details.
- SMS based configuration is commonly supported but requires the SIM to accept SMS and the installer to know the device configuration password.
- Choose UDP or TCP based on your deployment needs; Plaspy will accept either on port 8888 and detect the protocol automatically.
- When using placeholders such as {{apn}}, {{apnu}}, and {{apnp}} replace them with the operator specific APN and credentials required by the SIM card.
- After applying configuration, allow time for the device to register on the cellular network and for buffered points to upload to Plaspy.

## Why Use Plaspy with This Configuration

Configuring the TorchX 310 to report to Plaspy lets fleet managers consolidate vehicle location, CAN bus telemetry and BLE accessory data into a single platform for monitoring, reporting and alerting. The plug and play OBD II installation paired with the device's buffering and configurable reporting intervals makes it practical for fast rollouts and continuous operational visibility.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the most current device specific setup details, firmware behavior and manufacturer instructions at https://www.topflytech.com/ .
