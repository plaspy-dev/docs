---
slug: /teltonika/fmb150/configuration
id: fmb150-configuration
sidebar_label: Configuration
title: Teltonika - FMB150 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to prepare Teltonika FMB150 for use with Plaspy including server settings and example commands
keywords:
  - Teltonika FMB150 configuration
  - Teltonika FMB150 setup
  - FMB150 Plaspy configuration
  - Teltonika FMB150 server configuration
  - FMB150 GPS tracker setup
  - Teltonika FMB150 APN setup
  - Teltonika FMB150 SMS command
  - FMB150 fleet tracking configuration
  - Teltonika GPS platform setup
  - FMB150 CAN data tracking
---

# Teltonika - FMB150 Configuration

This page documents the public configuration context for using the Teltonika FMB150 tracker with Plaspy. It summarizes the shared server settings Plaspy expects, explains practical setup steps, and includes an example command commonly used to send basic parameters to the device. Use this guide to prepare the tracker for connectivity and visibility in Plaspy while keeping manufacturer documentation nearby for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, or vendor tool, so follow the Teltonika documentation and the specific configuration method you use when applying the values shown here.

## Configuration Overview

The configuration process prepares the FMB150 to communicate with Plaspy, verifies connectivity over the mobile network, and ensures the device reports correctly to the Plaspy server endpoint. The public example command below shows how basic parameters are commonly delivered to Teltonika devices using parameter IDs and placeholders.

- Set network APN and optional APN credentials so the tracker can use GPRS data.
- Point the device to the Plaspy server endpoint so telemetry is delivered to the platform.
- Select transport protocol (UDP or TCP) and confirm the device uses the shared Plaspy port.
- Save and apply the configuration, then verify the device appears and reports in Plaspy.
- Use SMS or the Teltonika configuration tool as appropriate for your installation and firmware.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will detect the tracker's protocol automatically when the device connects.

## Typical Requirements Before Setup

- Device powered and accessible for configuration either via SMS or the official configuration tool or software.
- Valid SIM card with a working mobile data APN for GPRS since the FMB150 communicates over 2G GPRS networks.
- Knowledge of the correct APN and optional APN username and password for the SIM operator.
- Access to Teltonika configuration documentation or parameter mapping to confirm parameter IDs for your firmware revision.
- A method to test device connectivity such as observing the device in Plaspy after configuration or using device response messages if supported.

## How This Tracker Connects to Plaspy

When configured, the FMB150 sends position and device data to the shared Plaspy server endpoint and port so the device becomes visible and manageable in the platform. Plaspy receives the inbound connections and applies automatic protocol detection to interpret the tracker messages.

- The tracker is pointed to d.plaspy.com (or the Plaspy server IP) and configured to use port 8888.
- You can configure the device to use either UDP or TCP transport, depending on your device settings.
- After configuration the device establishes a GPRS session and initiates connection to the Plaspy endpoint.
- Plaspy detects the tracker protocol automatically and routes the telemetry into the platform for tracking and event reporting.
- Validation of reporting is performed by checking the device status and incoming messages in Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the FMB150 (SMS command, Teltonika configurator, or other supported tool).
2. Enter the Plaspy server address d.plaspy.com or the server IP 54.85.159.138 in the appropriate server/host field.
3. Set the device server port to 8888 to match Plaspy's shared port requirement.
4. Choose UDP or TCP if the device requires explicit transport selection.
5. Configure APN settings and any APN credentials required for GPRS connectivity.
6. Apply or save the configuration to the device and restart the device if the tool or firmware requires a restart.
7. Validate that the device reports to Plaspy by checking device connection and telemetry inside the Plaspy platform.

## Example Configuration Commands

The following example is a public Teltonika style command used to set basic parameters including APN placeholders and the Plaspy server values. Replace the placeholders with your SIM operator APN details before sending. This command is commonly sent by SMS or via a Teltonika configuration tool depending on your setup.

- Example SMS or parameter command

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation
- {{apn}} is the mobile operator APN name required for GPRS data.
- {{apnu}} is the APN username placeholder if your operator requires it.
- {{apnp}} is the APN password placeholder if your operator requires it.
- 2004 is set to d.plaspy.com to point the tracker at the Plaspy server domain.
- 2005 is set to 8888 which is the Plaspy port used for all devices.
- The final parameter in this sequence is device specific; consult Teltonika parameter documentation to confirm the meaning and expected values for your firmware.

Always confirm parameter ID mappings and command syntax against the Teltonika FMB150 manual or the Teltonika configuration tool for your firmware version.

## Configuration Notes

- Parameter IDs and SMS command formats can differ between firmware versions; verify the exact parameter mapping in the Teltonika documentation for your device.
- You can configure the server by domain (d.plaspy.com) or by the Plaspy server IP 54.85.159.138 if your tool or workflow requires an IP.
- Choose UDP or TCP according to your installation needs; Plaspy supports both and will detect the protocol automatically when the device connects.
- SMS based configuration is commonly supported for Teltonika devices but configuration via the official Teltonika tool may be preferred for batch updates or firmware specific settings.
- After applying changes, restart the device if required and confirm that location and status messages arrive in Plaspy.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB150 with Plaspy provides a practical way to collect location, vehicle state, and CAN data insights from light vehicles, buses, trucks, and electric vehicles. Pointing the tracker to Plaspy using the shared server settings streamlines device onboarding and helps teams monitor fleets and vehicle diagnostics from a single platform.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, parameter mappings, and firmware behaviors verify details on the Teltonika official site https://www.teltonika-gps.com/ which maintains the authoritative FMB150 documentation.
