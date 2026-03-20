---
slug: /sinotrack/st_905_915/configuration
id: st_905_915-configuration
sidebar_label: Configuration
title: SinoTrack - ST-905/915 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SinoTrack ST-905 915 showing how to prepare the device to work with Plaspy using shared server settings
keywords:
  - SinoTrack ST-905 915 configuration
  - SinoTrack configuration Plaspy
  - ST-905 setup Plaspy
  - ST-915 GPS tracker configuration
  - SinoTrack server configuration
  - GPS tracker SMS commands
  - GPRS tracker setup
  - vehicle tracking Plaspy
  - asset tracker configuration
  - Sinotrack configuration guide
---

# SinoTrack - ST-905/915 Configuration

This page covers the public configuration context for using the SinoTrack ST-905/915 with Plaspy. It summarizes the practical, publicly available setup steps and commands used to point the tracker to Plaspy so the device can report location and status to the platform. Use this guide together with the device documentation from the manufacturer where needed.

Plaspy uses shared server settings for supported trackers and automatically detects the tracker protocol when the device connects. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools, so follow the commands and examples here as general guidance and verify specifics with your tracker firmware and vendor documentation.

## Configuration Overview

Configuring the ST-905/915 for Plaspy prepares the device to send location and event data to the Plaspy server and ensures the device is reachable and visible in the platform. The public ST-905/915 configuration workflow is commonly performed by sending SMS commands from a mobile phone to the tracker or using the manufacturer's configuration tool, depending on what is available.

- Restore or confirm device defaults if needed to ensure known configuration state before adding Plaspy settings.
- Set the correct time zone and APN so the tracker can connect to the mobile operator GPRS network.
- Point the tracker to the Plaspy server endpoint and port so data is delivered to the platform.
- Enable GPRS mode and set reporting intervals so the tracker uploads updates to Plaspy.
- Verify current device settings with the device verification command to confirm the RCONF ID and server configuration.

## Plaspy Server Settings

Use the following server settings when configuring the ST-905/915 for Plaspy. Plaspy uses the same port for all supported devices and performs automatic protocol detection when a tracker connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and powered ST-905/915 device with an active SIM card and GPRS service enabled.
- SMS capability to send configuration commands to the tracker if using SMS setup.
- The operator APN, username, and password for the SIM card to configure GPRS access.
- Access to the official manufacturer configuration method or documentation for ST-905/915 commands and behavior.
- Basic tools to monitor connectivity such as receiving status SMS replies from the tracker or reviewing platform incoming connection logs.
- Patience for propagation and network registration delays while the device switches to GPRS mode.

## How This Tracker Connects to Plaspy

The ST-905/915 is configured to report to the shared Plaspy server endpoint and port over the mobile data network. Once GPRS is enabled and the server is set, the tracker will attempt to open a TCP or UDP session to Plaspy and Plaspy will detect the tracker protocol automatically so the device appears in the platform.

- The tracker uses the configured APN to register on the mobile operator GPRS network.
- The device is pointed to Plaspy by configuring the server domain or the server IP and the shared port.
- After switching to GPRS mode the tracker will open a connection to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives incoming connections and uses automatic protocol detection to interpret the tracker messages.
- Successful connection and reporting make the device visible and usable in Plaspy for location and event monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the ST-905/915 (SMS commands or vendor tool) and confirm command syntax.
2. Restore factory settings if you need a clean baseline or if recommended by the installer.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server configuration.
4. Set the device port to 8888.
5. Choose UDP or TCP transport on the device if the device requires selecting the transport type.
6. Set the device APN and GPRS parameters using the operator APN, username, and password placeholders where applicable.
7. Apply or save the configuration and restart the device if required to activate GPRS changes.
8. Validate that the device reports to Plaspy by checking the Plaspy platform for device connectivity and by using any device verification command such as RCONF.

## Example Configuration Commands

The ST-905/915 public configuration commands below are commonly sent to the device via SMS. Preserve the placeholders and replace them with your operator values where applicable. Commands are shown in the recommended order for initial setup.

- Optional initial factory reset (use only if you need to restore factory defaults)
```text
RESET
```

- Set the time zone to UTC 0
```text
8960000E00
```

- Set the APN for operator connectivity. Replace placeholders as needed:
  - [apn] is the mobile operator APN
  - [apnu] is the APN username if required (leave blank if not required)
  - [apnp] is the APN password if required (leave blank if not required)
```text
8030000 [apn] [apnu] [apnp]
```

- Configure the GPRS server to point to Plaspy using the server IP and port 8888
```text
8040000 54.85.159.138 8888
```

- Set reporting update interval when device is on
```text
8050000 60
```

- Set reporting update interval when device is off
```text
8090000 60
```

- Switch the tracker to GPRS mode so it attempts a data connection
```text
7100000
```

- Verify current configuration and retrieve the device ID used by Plaspy identification
```text
RCONF
```

Note: Commands are shown as public examples provided by the manufacturer. When sending SMS commands, confirm the exact syntax with your device firmware version and vendor documentation.

## Configuration Notes

- SMS based configuration is supported by the ST-905/915 and is shown above; vendor tools may also provide the same options via a configuration interface.
- Different firmware versions or hardware revisions may use slightly different command formats or require different parameter orders. Confirm with official manufacturer documentation before mass deployment.
- Choose UDP or TCP based on network and installer preference; Plaspy accepts either transport on the shared port and will detect the protocol automatically.
- Always verify the APN values for your SIM operator before configuring the device to ensure GPRS connectivity.
- Allow several minutes for network registration and GPRS session establishment after switching to GPRS mode.

## Why Use Plaspy with This Configuration

Using the ST-905/915 with Plaspy provides a straightforward way to receive location and status reports from field devices while relying on a single, shared server endpoint and port. Configuring the device to use Plaspy's server settings and switching to GPRS mode enables continuous data reporting and platform visibility so fleets and asset managers can monitor devices in near real time.

To learn more about Plaspy and how it integrates with a wide range of trackers visit https://www.plaspy.com. For the most current Sinotrack device specific commands, firmware notes, and installation guides verify details on the manufacturer site https://www.sinotrackgps.com/ since device specific methods and firmware behavior can change over time.
