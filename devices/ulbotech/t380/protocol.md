---
slug: /ulbotech/t380/protocol
id: t380-protocol
sidebar_label: Protocol
title: Ulbotech - T380 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Ulbotech T380 and how the tracker communicates with Plaspy for reliable fleet tracking
keywords:
  - Ulbotech T380 protocol
  - T380 GPS protocol
  - Ulbotech T380 Plaspy
  - T380 communication protocol
  - T380 tracking protocol
  - Ulbotech GPS tracker
  - OBDII GPS protocol
  - vehicle tracking protocol
  - fleet management protocol
  - Plaspy device compatibility
---

# Ulbotech - T380 Protocol

This page describes the public protocol context for using the Ulbotech T380 with Plaspy. It focuses on how the device communicates telemetry and events to the Plaspy backend and what to consider when configuring the tracker for fleet management, anti theft, and driver behavior monitoring. The guidance here is intentionally high level and avoids private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and message timing can vary by firmware version, hardware revision, and manufacturer implementation, so device behavior in the field may differ between units or firmware releases. The T380 is a plug and play OBDII tracker with 4G LTE, built in Wi‑Fi hotspot and bridging, GNSS positioning, on board motion sensors, immobilizer outputs, and FOTA capabilities that together provide the telemetry Plaspy consumes.

## Protocol Overview

The device protocol defines how the T380 sends position fixes, motion events, input/output states, and status updates so Plaspy can ingest and display usable telemetry. For Plaspy compatibility this protocol provides the identifiers and telemetry fields needed to associate reports with a device and to generate live maps, alerts, and reports without exposing raw proprietary message formats here.

- Transports position and GNSS fixes along with timestamp and device identity to the backend for live and historical tracking.
- Sends motion and accelerometer events used for driver behavior detection, event logging, and alert generation.
- Reports I/O states such as ignition, immobilizer output, and digital input events so Plaspy can trigger actions or alarms.
- Communicates Wi‑Fi hotspot and bridging status plus connection source to help manage cellular usage and connectivity decisions.
- Supports remote management signals such as FOTA readiness, APN and time zone auto detection status that assist large scale rollouts and maintenance.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared inbound endpoint and automatically determines the appropriate protocol for most supported trackers including the T380. When a tracker is configured to report to the Plaspy endpoint, manual protocol selection inside the platform is typically not required, which simplifies device onboarding.

- Plaspy accepts device traffic addressed to d.plaspy.com or the server IP 54.85.159.138 using the common port 8888.
- All devices that report to Plaspy use the same port value, so port configuration is consistent across models.
- Plaspy automatically detects the tracker protocol when telemetry arrives at the platform, reducing the need for per device protocol settings.
- Ensure the T380 is configured to report to the Plaspy endpoint for automatic detection to take effect.
- If a device does not appear, verify device reporting settings on the tracker and check that the device network can reach d.plaspy.com or 54.85.159.138 on port 8888.

## Transport and Connection Context

Connection transport and endpoint selection determine how the T380 reaches Plaspy and how reliably reports arrive. The T380 can use its cellular modem or available Wi‑Fi to send telemetry, and transport choice can affect latency and delivery behavior.

- The T380 may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Devices can be pointed either to the domain d.plaspy.com or directly to the IP address 54.85.159.138 as the Plaspy ingest endpoint.
- Plaspy uses the same port 8888 for all supported devices to simplify firewall and network configuration.
- Wi‑Fi bridging on the T380 can reduce cellular data usage while keeping telemetry flowing to the Plaspy endpoint when connectivity allows.
- Network conditions, carrier NAT, and regional roaming may affect transport choice and should be considered during deployment planning.

## Protocol Compatibility Notes

- Firmware versions can change packet behavior, reporting intervals, and optional fields; always confirm which firmware is running on your T380 units.
- Hardware revisions or regional band variants may implement the same high level protocol differently; validate compatibility for your specific SKU.
- Some features such as immobilizer control, Wi‑Fi bridging, or FOTA may depend on firmware and regional certification.
- Transport selection (UDP vs TCP) can be limited by device firmware or carrier network behavior; confirm the device supports your preferred transport.
- Pointing the device to d.plaspy.com or 54.85.159.138 with port 8888 is required for Plaspy ingestion; ensure network firewalls permit outbound traffic to this endpoint and port.
- For large rollouts, test a small fleet and confirm event semantics, timing, and FOTA behaviors before mass deployment.

## Why Protocol Understanding Matters

Understanding the T380 communication protocol at a conceptual level helps ensure a reliable integration with Plaspy and faster troubleshooting when devices do not behave as expected. Knowing what types of telemetry are reported and how the device connects lets administrators tune reporting intervals, alerts, and network settings for performance and cost control.

- Helps confirm that position, accelerometer, and I/O telemetry required by your workflows are present and reported as expected.
- Simplifies network and firewall configuration by knowing the Plaspy endpoint and shared port used by all devices.
- Assists with diagnosing connectivity issues by understanding when a device should use cellular versus Wi‑Fi bridging.
- Enables planned rollouts of FOTA and configuration changes by anticipating how devices announce readiness and status.
- Supports data quality checks that improve reporting accuracy for fleet operations and driver behavior analysis.

## Why Use Plaspy with This Protocol

The Ulbotech T380 is a practical plug and play OBDII tracker whose telemetry aligns with common fleet management needs: continuous GNSS fixes, accelerometer driven eventing, I/O state reporting, and remote immobilizer control. Paired with Plaspy’s automatic protocol detection and centralized ingestion, organizations gain a straightforward path to real time visibility, alerts, and historical reporting without complex per device protocol configuration.

Plaspy’s shared connection settings and automatic protocol detection reduce onboarding friction for the T380. Using the device’s Wi‑Fi bridging and hotspot features alongside cellular reporting can lower operational costs while maintaining telemetry continuity. To learn more about Plaspy and how it can work with Ulbotech devices visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation may change over time and you should verify the latest device specific protocol and firmware details with the manufacturer at http://www.ulbotech.com/.
