---
slug: /queclink/gl300/configuration
id: gl300-configuration
sidebar_label: Configuration
title: QuecLink - GL300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL300 setup with Plaspy including server settings and SMS commands for device setup
keywords:
  - QuecLink GL300 configuration
  - QuecLink GL300 setup
  - GL300 server configuration
  - GL300 Plaspy setup
  - QuecLink GPS tracker configuration
  - Plaspy device configuration
  - GL300 SMS commands
  - GL300 GPRS setup
  - GPS tracker platform integration
  - Plaspy compatible devices
---

# QuecLink - GL300 Configuration

This page describes the public configuration context for using the QuecLink GL300 with Plaspy. It summarizes the practical server settings Plaspy requires, the typical preparation steps before integration, and the sample SMS commands that are commonly used to configure a GL300 to report to Plaspy. The instructions below are intended to help technical installers and integrators prepare the device so it can send location and status data into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GL300 supports SMS-based configuration and GPRS server settings in its public command set, so this page includes example SMS commands and notes while encouraging verification against current QuecLink documentation.

## Configuration Overview

Configuring a GL300 for Plaspy prepares the device to establish an IP session to Plaspy's shared endpoint, report regular position updates, and raise event notifications that appear in Plaspy dashboards. The process focuses on setting the network APN, configuring the device to use Plaspy's server and port, and verifying that the tracker is visible in the platform.

- Configure the device to report to Plaspy's shared server endpoint so data is routed to your Plaspy account.
- Set the GPRS APN and operator credentials so the GL300 can open a data connection.
- Choose the transport (UDP or TCP) on the device if required and set the port to match Plaspy's shared port.
- Validate connectivity by confirming the tracker appears and reports at the expected update interval in Plaspy.
- Apply any device-level settings such as reporting interval and SOS or input behavior that you want Plaspy to receive.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note: Plaspy uses the same port for all supported devices and will detect the correct protocol automatically, so configuring the GL300 to point to d.plaspy.com (or 54.85.159.138) on port 8888 is the essential network step.

## Typical Requirements Before Setup

- A charged GL300 with a working SIM card that has data enabled for GPRS and SMS capability for command-based configuration.
- Knowledge of the device password; the public example commands below use the default password queclink.
- Access to the official QuecLink SMS command set or configuration tool provided by the manufacturer for your firmware version.
- The APN, APN username, and APN password from the SIM / mobile operator (if required).
- A way to receive or view reports in Plaspy to validate connectivity after configuration.

## How This Tracker Connects to Plaspy

The GL300 is configured to open a GPRS session and send position and event messages to the shared Plaspy endpoint and port. Once the device establishes the session, Plaspy receives and interprets the tracker protocol to populate live maps and event streams.

- The device posts location and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy ingests incoming data and automatically detects the tracker protocol for correct parsing.
- Regular location updates are sent at the configured interval so the device is visible in Plaspy dashboards.
- Configured event notifications such as SOS or input changes are forwarded to Plaspy for alerting.
- Platform visibility enables historical playback, geofence alerts, and operational monitoring within Plaspy.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL300 — typically SMS commands or the manufacturer tool — and confirm the device password.
2. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device GPRS/server settings.
3. Set the port to 8888 for the device reporting endpoint.
4. Choose UDP or TCP if the device requires selecting a transport; configure on the device accordingly.
5. Set the APN and any operator credentials so the device can establish a GPRS session.
6. Apply or save the configuration on the device and restart the device if required by the vendor procedure.
7. Validate that the GL300 reports to Plaspy by checking device activity and position updates in the Plaspy platform.

## Example Configuration Commands

The following example SMS commands are extracted from public QuecLink GL300 configuration content. Commands are shown in order and use the device password queclink as the default. If you use SMS to configure the unit, send each command as a separate SMS to the device number. Preserve the placeholders and replace them with your operator values where indicated.

1. Optional initial factory restore (use only if you need to reset device settings)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your SIM operator values)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = the operator APN string
- {{apnu}} = APN username if required (leave empty if not used)
- {{apnp}} = APN password if required (leave empty if not used)

4. Configure the GPRS server to point to Plaspy (domain and IP are both included in the public example)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command sets the primary server endpoint to d.plaspy.com on port 8888 and includes the IP 54.85.159.138 as shown in public configuration examples.

5. Set the location update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notifications on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Important notes about these commands:
- The sample password in these public commands is queclink. If your device password has been changed, substitute the correct password.
- Replace the APN placeholders with values from your SIM operator before sending.
- The factory restore command is optional and should be used only when you intend to reset the device to defaults.

## Configuration Notes

- QuecLink firmware versions and regional firmware variants can change command syntax or parameter ordering; always verify the command syntax against the device firmware documentation.
- SMS-based configuration is supported in the public examples above; some projects prefer using manufacturer software or local configuration tools when available.
- Choose UDP or TCP based on your deployment needs; Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- Because Plaspy uses a shared port for all devices, confirm you have entered d.plaspy.com or 54.85.159.138 and port 8888 exactly as required.
- Keep a record of the device password and configuration steps performed for future maintenance and auditing.

## Why Use Plaspy with This Configuration

Using the QuecLink GL300 with Plaspy gives organizations a straightforward way to bring rugged, multi-constellation GNSS tracking data into a centralized platform for real-time monitoring, alerting, and historical analysis. The GL300's compact form factor and field-proven reliability make it a practical option for personal safety, event monitoring, and asset visibility where consistent position feeds are required.

To learn more about Plaspy and how it ingests device data, visit https://www.plaspy.com. For the latest device-specific command reference, firmware notes, and manufacturer guidance, verify current setup details on the QuecLink website at https://www.queclink.com/ as manufacturer specifications and setup methods can change over time.
