---
slug: /flextrack/lommy_power_9b23/features
id: lommy_power_9b23-features
sidebar_label: Features
title: Flextrack - Lommy Power 9B23 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for Flextrack Lommy Power 9B23 and how it integrates with Plaspy for continuous machine tracking
keywords:
  - Flextrack Lommy Power 9B23 features
  - Lommy Power 9B23 GPS tracker
  - Flextrack GPS tracker
  - Lommy Power features Plaspy
  - machine tracking GPS
  - equipment tracking
  - operating hour tracking
  - LTE Cat M1 tracker
  - GNSS multi constellation
  - Plaspy compatible tracker
---

# Flextrack - Lommy Power 9B23 Features

This page describes the public feature context for the Flextrack Lommy Power 9B23 and how those capabilities are used with Plaspy for continuous monitoring of heavy equipment and machinery. It focuses on user facing capabilities, practical operational value, and how device events and telemetry feed into Plaspy workflows and dashboards.

Exact feature availability can vary by firmware version, hardware revision, installation method, and manufacturer implementation. For device specific configuration, installation guidance, and the latest technical details consult Flextrack documentation and release notes.

## Feature Overview

The Lommy Power 9B23 is a compact hard wired tracker built for continuous machine monitoring in demanding outdoor environments. Its design emphasizes always-on connectivity when the host machine battery is present, multi constellation GNSS positioning, cellular connectivity with fallback, and reporting logic tuned for operation versus parked states.

- Hard wired power design for continuous operation while connected to the machine battery
- Multi constellation GNSS for reliable positioning in construction and forestry environments
- LTE Cat M1 connectivity with GSM fallback to maintain coverage across regions
- Intelligent reporting rules that reduce data use when assets are idle while providing frequent updates during operation
- Onboard telemetry for operating hours, ignition detection, and auxiliary input reporting

## Core Features of Flextrack - Lommy Power 9B23

- Hard wired power input compatible with machine battery systems with an operational range that supports continuous monitoring
- Multi constellation GNSS including GPS, GLONASS, GALILEO, BEIDOU and QZSS for improved positioning availability
- LTE Cat M1 cellular connectivity with quad band 2G fallback to extend coverage where LTE Cat M1 is not available
- Intelligent reporting logic with frequent updates during motion or operation and infrequent heartbeat updates when parked
- Battery current measurement and ignition start stop detection to capture engine events and support operating hour calculation
- Operating hour accumulation for preventive maintenance scheduling and invoicing workflows
- Optional auxiliary input for attachment or implement activity detection and reporting

## How These Features Work with Plaspy

Lommy Power 9B23 streams location and telemetry into Plaspy so fleet managers and operators can view live asset state, receive event notifications, and generate utilization reports. Plaspy ingests the device events and maps them to dashboards, alerts, and reporting tools used for operational oversight.

- Real time location and telemetry appear in Plaspy dashboards to support tracking and dispatch decisions
- Ignition and motion events map to Plaspy alerts and activity timelines for anti theft and utilization monitoring
- Operating hours reported by the device feed into Plaspy utilization and maintenance reports for scheduling and invoicing
- Auxiliary input events can be represented in Plaspy as custom inputs or activity markers for attachments and implements
- Local device storage buffers recent data during connectivity interruptions so Plaspy receives a continuous picture when the link restores

## Typical Use Cases

- Continuous fleet management of construction equipment to monitor location and usage across job sites
- Rental and short term hire operations needing accurate operating hour billing and activity verification
- Preventive maintenance planning using accumulated operating hours and engine run events to schedule service
- Theft detection and recovery workflows leveraging motion, ignition and location updates
- Monitoring attachments or implements via the optional auxiliary input for billing or operational visibility

## Feature Availability Notes

- Firmware version can affect exact reporting intervals, available event types, and telemetry fields exposed to Plaspy
- Hardware revisions and regional cellular variants may change supported cellular bands or regulatory certifications
- Installation type and wiring correctness influence ignition detection and operating hour accuracy
- Optional features such as auxiliary input behavior depend on how the unit is wired and configured at install
- Always verify the device configuration and firmware settings before relying on a specific telemetry behavior in production workflows

## Why Use Plaspy with These Features

Using the Lommy Power 9B23 with Plaspy provides a straightforward route from rugged field hardware to operational insight. The device supplies continuous location, engine event detection, and operating hour telemetry while Plaspy turns those inputs into dashboards, alerts, and reports that help teams reduce idle time, enforce rental terms, and schedule maintenance more predictably.

Learn more about how Plaspy supports operational visibility and telematics workflows at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time so verify the latest device specific information on the manufacturer site https://flextrack.dk.
