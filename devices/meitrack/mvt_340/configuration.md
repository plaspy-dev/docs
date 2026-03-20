---
slug: /meitrack/mvt_340/configuration
id: mvt_340-configuration
sidebar_label: Configuration
title: Meitrack - MVT-340 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Meitrack MVT 340 for Plaspy with practical server settings SMS commands and setup guidance for reliable tracking
keywords:
  - Meitrack MVT 340 configuration
  - Meitrack MVT 340 setup
  - Meitrack MVT 340 server configuration
  - MVT 340 Plaspy setup
  - MVT 340 GPS tracker configuration
  - Meitrack GPS tracker setup
  - vehicle tracker configuration Meitrack
  - Meitrack MVT 340 SMS commands
  - Meitrack tracker server settings
  - Plaspy tracker configuration
---

# Meitrack - MVT-340 Configuration

This page covers the public configuration context for using the Meitrack MVT-340 with the Plaspy fleet management platform. It explains the practical server settings and sample SMS commands that are commonly used to point an MVT-340 at Plaspy for live reporting. Use this guide together with your device documentation for exact device specific workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so all devices report to the same Plaspy endpoint and port. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The MVT-340 supports SMS based configuration in the examples below and the sample SMS commands use the device default password 0000 as shown in public documentation.

## Configuration Overview

The goal of configuration is to prepare the MVT-340 so it can reliably communicate location and event information to Plaspy. This involves applying the Plaspy server endpoint and port, ensuring cellular data and APN details are correct, and confirming the tracker appears online in the platform.

- Set the MVT-340 to report to the Plaspy server endpoint using the provided server settings.
- Verify the device has a working SIM with data and the correct APN so GPRS reporting succeeds.
- Apply reporting intervals and event settings so the tracker sends the desired updates to Plaspy.
- Validate connectivity in Plaspy and confirm alerts like geo fence or SOS are available.
- Use SMS commands or the manufacturer tool according to your installation and firmware to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered MVT-340 installed or connected to a stable power source for configuration and testing.
- A SIM card with data and SMS enabled and a known APN for the mobile operator.
- Access to the device configuration method supported by the tracker such as SMS commands or the manufacturer's configuration utility.
- Knowledge of the device password the tracker accepts for configuration actions; the public sample uses the default password 0000.
- Reliable cellular coverage at the device installation location for successful GPRS reporting.
- The APN, APN username, and APN password values ready to insert into the device configuration if required.

## How This Tracker Connects to Plaspy

When configured, the MVT-340 sends its location and event data from the tracker to the shared Plaspy server endpoint and port. Plaspy receives the device data on the single configured port and determines the appropriate protocol automatically.

- The tracker is configured to report to the Plaspy endpoint d.plaspy.com or to the IP 54.85.159.138 on port 8888.
- Data transport can use either UDP or TCP depending on device support and your preference.
- The device will send periodic location updates based on the configured reporting interval.
- Event reporting such as geo fence exits, SOS activation, and speeding alerts will be forwarded to Plaspy for visibility.
- Plaspy uses a single port for all devices and automatically detects the tracker protocol to simplify server configuration.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for your MVT-340 such as SMS commands or Meitrack configuration software documented by the manufacturer.  
2. Gather required values including the Plaspy server endpoint (d.plaspy.com or 54.85.159.138), port 8888, device password, and the APN credentials for the SIM.  
3. Enter the Plaspy server address using the device method and set port 8888. If the device accepts a domain use d.plaspy.com, otherwise use 54.85.159.138.  
4. Choose UDP or TCP if the device requires a transport selection and save that option.  
5. Apply or save the configuration on the device and restart the tracker if the manufacturer instructions require it.  
6. Validate that the device reports to Plaspy and confirm the tracker appears online and sending expected updates in the platform.  
7. Adjust reporting intervals or event settings on the tracker as needed to match your monitoring needs and confirm changes through Plaspy.

## Example Configuration Commands

The MVT-340 supports SMS based configuration. The following sample SMS commands are provided in the public Meitrack content and use the default device password 0000. Preserve the order when applying commands where sequence matters.

- Optional initial factory reset (use only if needed during initial setup):
```
0000,F11
```

- Set the GPRS server to the Plaspy IP with port and APN placeholder values:
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explanation: {{apn}} is the mobile operator APN. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders. Keep these placeholders and replace them with your carrier credentials as required.

- Set the time zone to UTC 0:
```
0000,B36,0
```

- Set the update interval to every 1 minute:
```
0000,A12,6,0
```

- Set event reporting options:
```
0000,C03,0
```

Notes about these commands
- The sample commands use the default password 0000 as shown in public documentation; change or secure the device password using the manufacturer method when appropriate.
- Maintain the order when the workflow requires it, for example applying server settings before validating connectivity.
- If your setup method is a configuration tool rather than SMS, use equivalent fields for server, port, transport, APN, and intervals in that tool.

## Configuration Notes

- Firmware and hardware revisions can alter the exact SMS command syntax or available parameters; always check the device documentation for your firmware version.
- SMS based setup is supported by the public MVT-340 command set shown above; a manufacturer configuration utility may offer a graphical alternative.
- Use the APN placeholders {{apn}}, {{apnu}}, and {{apnp}} to insert your carrier credentials when required by the SIM plan.
- Choose TCP or UDP according to installer preference and device capability; Plaspy will auto detect the protocol used by the tracker.
- Plaspy operates on the same port for all supported devices which simplifies server-side configuration and reduces per device setup complexity.

## Why Use Plaspy with This Configuration

Using the Meitrack MVT-340 with Plaspy provides a straightforward path to vehicle visibility and event monitoring. With the tracker pointed at Plaspy's shared server endpoint and port, organizations can consolidate live location, geo fence alerts, SOS events, and other notifications into a single platform for operational oversight.

To learn more about Plaspy and how it works with trackers like the MVT-340 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify details on the official Meitrack site https://www.meitrack.com/ since setup methods and behavior can change with firmware and hardware revisions.
