---
slug: /tzone/tz_tt18/configuration
id: tz_tt18-configuration
sidebar_label: Configuration
title: TZone - TZ-TT18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TZone TZ-TT18 showing how to prepare the device for use with Plaspy using shared server settings
keywords:
  - TZone TZ TT18 configuration
  - TZ TT18 setup for Plaspy
  - TZone TZ TT18 server configuration
  - TZ TT18 GPS tracker configuration
  - TZ TT18 GPRS setup
  - Plaspy device configuration
  - temperature humidity transmitter setup
  - TZone tracker SMS commands
  - cold chain transmitter configuration
  - vehicle and asset tracking setup
---

# TZone - TZ-TT18 Configuration

This page covers the public configuration context for using the TZone TZ-TT18 single-use temperature and humidity transmitter with Plaspy. It focuses on the shared server settings and the practical setup steps required to point the device at Plaspy so the tracker can send temperature and humidity readings using GPRS. Where manufacturer-specific commands are publicly available, those are included as examples.

Plaspy uses a common server endpoint and port across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, or vendor tools; the TZ-TT18 supports SMS-based configuration and GPRS reporting, and the commands below show one typical SMS workflow used to configure this model.

## Configuration Overview

The goal of this configuration is to prepare the TZ-TT18 to reliably report temperature and humidity data to Plaspy over GPRS. That includes providing cellular APN details, configuring the device to use the Plaspy server endpoint and port, and enabling GPRS reporting so the device wakes, sends data, and returns to low-power sleep between reports.

- Provide the operator APN so the device can connect to the mobile data network.
- Set an appropriate reporting interval so the device transmits at the needed frequency.
- Point the device to the Plaspy server endpoint (domain or IP) and port so data reaches the platform.
- Enable GPRS mode so the tracker sends stored and live readings to Plaspy.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supports UDP or TCP on port 8888 (device may be configured for either)  
- Plaspy behavior: Plaspy automatically detects the tracker protocol when data arrives and uses the same port for all supported devices

## Typical Requirements Before Setup

- An active SIM card inserted in the TZ-TT18 with a data plan and the operator APN information available.  
- The tracker must have sufficient battery charge to complete initial configuration and GPRS attachment.  
- A method to send SMS commands to the device (the TZ-TT18 supports SMS-based configuration).  
- Access to the official manufacturer configuration instructions or tools for the TZ-TT18 to confirm any model or firmware specifics.  
- Coverage for GPRS data in the device deployment location so the tracker can reach Plaspy via mobile data.

## How This Tracker Connects to Plaspy

The TZ-TT18 collects temperature and humidity samples and reports them to Plaspy using GPRS. Configuration tells the device which server to contact and how often to wake and send measurements, allowing Plaspy to display telemetry and history for monitoring and alerts.

- The device is configured to report to the shared Plaspy server endpoint and port.  
- The tracker uses GPRS to open a connection to d.plaspy.com or the server IP 54.85.159.138 on port 8888.  
- Plaspy automatically detects the tracker protocol and processes incoming data for visibility in the platform.  
- Reports are sent according to the configured update interval so Plaspy can show recent and historic readings.  
- When configured correctly, the device becomes visible in Plaspy for operational monitoring and event reporting.

## Common Configuration Workflow

1. Confirm prerequisites: insert a working SIM, note the operator APN, and ensure the device has power.  
2. Access the official manufacturer configuration method or software and review the SMS command format for the TZ-TT18.  
3. Configure the APN on the device using the SMS command format shown below so the tracker can use GPRS.  
4. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set port 8888.  
5. Choose UDP or TCP on the device if it requires an explicit transport selection.  
6. Apply or save the configuration and activate GPRS mode on the tracker.  
7. Restart the device if required by the manufacturer or as part of your verification steps.  
8. Validate that the device reports to Plaspy and appears in the platform with expected sensor readings.

## Example Configuration Commands

The TZ-TT18 can be configured by sending SMS messages. The following public SMS commands are provided in the manufacturer documentation and show a common order for initial setup. Preserve the placeholders and replace them with your operator values as needed.

1. Set the operator APN (APN username and password are optional). Replace {{apn}} with your SIM APN and optionally provide {{apnu}} and {{apnp}} if your operator requires them.

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

If no username or password is needed, use the simpler form:

```
*000000,011,{{apn}}#
```

2. Set the update interval to 60 seconds (this example sets interval and a retry or mode parameter as used by the device).

```
*000000,018,60,999#
```

3. Set the GPRS server to the Plaspy endpoint using the Plaspy server IP and port. This example uses the public Plaspy server IP and port.

```
*000000,015,0,54.85.159.138,8888#
```

You can also point the device to the domain instead of the IP if the device supports domain names in this command (use d.plaspy.com), otherwise use the IP as shown.

4. Activate GPRS mode so the device will use data reporting:

```
*000000,016,1#
```

Notes on placeholders and values:
- {{apn}} is your mobile operator APN string.  
- {{apnu}} is the APN username when required by the operator.  
- {{apnp}} is the APN password when required by the operator.  
- The leading numeric sequence 000000 in these examples is the device command password as shown in the public command forms; confirm the correct password for your unit with manufacturer documentation or vendor instructions.

## Configuration Notes

- The TZ-TT18 uses SMS-based commands for configuration in the examples above; manufacturer firmware versions or regional variants may change command formats.  
- Choose UDP or TCP on the device according to your network and provider; Plaspy accepts either transport and will detect the protocol automatically.  
- Plaspy uses the same port (8888) for all supported devices; ensure your device is configured to match that port.  
- Because the TZ-TT18 sleeps between reporting windows to conserve battery, allow time for the device to wake and perform a successful GPRS session during testing.  
- Always confirm APN details and any operator-specific settings before sending configuration SMS messages.

## Why Use Plaspy with This Configuration

Using the TZ-TT18 with Plaspy provides a straightforward path to capture temperature and humidity telemetry from distributed assets and have that data visible in a centralized platform. For applications such as cold chain logistics, medical storage, and refrigeration monitoring, configuring the device to report to Plaspy ensures environmental readings are collected and available for operational review, alerts, and record keeping.

To learn more about Plaspy and supported device configurations visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and exact setup methods can change over time, so verify the latest device-specific details on the official TZone website at http://www.tzonedigital.com/.
