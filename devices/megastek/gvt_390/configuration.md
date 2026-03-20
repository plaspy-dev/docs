---
slug: /megastek/gvt_390/configuration
id: gvt_390-configuration
sidebar_label: Configuration
title: Megastek - GVT-390 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Megastek GVT 390 to connect with Plaspy using shared server settings and SMS setup examples
keywords:
  - Megastek GVT 390 configuration
  - Megastek GVT 390 setup
  - GVT 390 Plaspy
  - Megastek GPS tracker configuration
  - GVT 390 server settings
  - GVT 390 SMS setup
  - vehicle tracking GVT 390
  - fleet management GVT 390
  - GVT 390 APN settings
  - GVT 390 protocol configuration
---

# Megastek - GVT-390 Configuration

This page covers the public configuration context for using the Megastek GVT-390 tracker with Plaspy. It consolidates the shared Plaspy server settings and the public SMS commands that are commonly used to prepare the GVT-390 for communication with the platform. The content here is grounded in the device description and the publicly available SMS setup sequence provided for the model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where SMS commands are shown below they reflect public examples; always verify device behavior if your hardware or firmware differs.

## Configuration Overview

The goal of configuring the GVT-390 for Plaspy is to point the tracker at the Plaspy server endpoint, confirm mobile data and APN settings, and validate that the device reports correctly into the Plaspy platform. For GVT-390 models the manufacturer provides an SMS based setup sequence which is commonly used during installation and testing.

- Configure network access and APN so the tracker can open a GPRS session to Plaspy.
- Set the tracker device ID so the platform can associate incoming reports with the correct asset.
- Point the tracker to the Plaspy server endpoint and port so data reaches the platform.
- Enable GPRS mode and choose transport (UDP or TCP) if required by the device firmware.
- Validate connectivity by confirming the device reports location and status to Plaspy.
- Save and, if necessary, restart the device so settings take effect.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GVT-390:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may allow selecting either)
- Plaspy automatically detects the tracker protocol and all devices use the same port

These values are the public shared settings that Plaspy requires for incoming tracker connections.

## Typical Requirements Before Setup

- A powered GVT-390 unit with SIM card installed and active data and SMS service
- Knowledge of the device IMEI and the current device password (example default password 000000 in public examples)
- Access to an SMS capable phone or the manufacturer's configuration tool to send commands
- Correct APN information from the SIM provider for mobile data
- Network coverage where the tracker will operate to allow GPRS connections
- Basic understanding of UDP versus TCP transport if the device asks for a transport selection

## How This Tracker Connects to Plaspy

When configured, the GVT-390 uses its GPRS connection to send tracking and status messages to the Plaspy server endpoint and port. Plaspy receives the incoming connection and automatically determines the tracker protocol so data can be parsed and displayed in the platform.

- The tracker opens a GPRS session and connects to the configured Plaspy server endpoint
- Reporting is sent to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- You can select UDP or TCP transport on the device if required; Plaspy accepts both
- Plaspy automatically detects the tracker protocol and associates reports with the device ID
- The platform provides visibility, status, and event reporting after successful connectivity

## Common Configuration Workflow

1. Access the official Megastek configuration method for the GVT-390 such as the manufacturer SMS commands or the vendor configuration tool.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 as required by the device interface.
3. Set the port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP transport if the tracker requires a transport selection.
5. Apply or save the configuration using the device method (send SMS commands or save via the config tool).
6. Restart the device if the manufacturer instructions indicate a reboot is required for settings to take effect.
7. Validate that the device reports to Plaspy and appears in the platform with the correct device ID.

## Example Configuration Commands

The manufacturer provides an SMS based configuration sequence for the GVT-390. The example commands below follow the public sequence and use the default device password shown in public examples. Replace placeholders before sending.

Notes on placeholders:
- [imei] — replace with the device IMEI number (usually 15 digits)
- [apn] — replace with the operator APN provided by the SIM carrier
- [apnu] — optional APN username if required by the carrier
- [apnp] — optional APN password if required by the carrier
- The sample public default device password is 000000; replace this if your device uses a different password

1) Set the device ID (replace [imei] with the device IMEI, 15 digits)
```
M000000,22,[imei]
```

2) Set the operator APN (replace placeholders as needed; apnu and apnp are optional)
```
M000000,23,[apn],[apnu],[apnp]
```

3) Set the update interval to 60 seconds
```
M000000,25,60
```

4) Set the GPRS server to Plaspy using the public server IP and port
```
M000000,24,56 54.85.159.138,8888
```

5) Enable GPRS mode
```
M000000,21,2
```

Send each command as an SMS from an authorized phone number or via the configured manufacturer tool. Maintain the order where the server and APN are configured before enabling GPRS mode to ensure the device can register and connect.

## Configuration Notes

- The public example shows SMS based configuration; some vendors also offer PC tools or over the air tools that perform the same steps.
- The default password 000000 is shown in public examples; if your device uses a different password change commands accordingly.
- Firmware revisions and hardware variants can affect required command syntax or available parameters; always check your device firmware behavior.
- Choose UDP or TCP based on your installation needs; Plaspy supports both and it will detect the protocol automatically.
- Because Plaspy uses the same port for all devices, ensure that 8888 is set consistently on every unit intended to report to Plaspy.

## Why Use Plaspy with This Configuration

Using the GVT-390 with Plaspy provides a straightforward way to centralize location and status reporting for vehicles and assets. The public configuration sequence and the shared Plaspy server settings make it possible to standardize installations so devices report consistently into the platform for monitoring, event alerts, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com and review the Megastek official documentation at https://www.megastek.com/ to confirm the most current device specific setup methods and firmware details. Manufacturer specifications and setup procedures can change over time so verifying the latest information on the Megastek website is recommended.
